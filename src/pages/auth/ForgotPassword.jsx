import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState(false);
  const navigate = useNavigate();

  const resetPassword = async (e) => {
e.preventDefault()
    try {
      const result = await sendPasswordResetEmail(auth, email);
      setEmailMessage(true);
      toast.success("Password reset link sent to your email", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("user not found", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {emailMessage ? (
        <div className="flex flex-col items-center justify-center h-screen">
        <h3 className="text-2xl text-center">The Email has been sent; Check your Inbox!</h3>
        <div>
            <Link to="/login">
        Login Now
            </Link>
        </div>
      </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-24">
          <div className="flex flex-col items-center justify-center  p-4 space-y-4 antialiased text-gray-900 bg-gray-100">
            <div className="w-full px-8 max-w-lg space-y-6 bg-white rounded-md py-16">
              <h1 className=" mb-6 text-3xl font-bold text-center">
                Don't worry
              </h1>
              <p className="text-center mx-12">
                We are here to help you to recover your password. Enter the
                email address you used when you joined and we'll send you
                instructions to reset your password.
              </p>
              <form  className="space-y-6 w-ful" onSubmit={resetPassword}>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required=""
                />
                <div>
                  <button
                    
                    type="submit"
                    className="w-full px-4 py-2 font-medium text-center text-white bg-indigo-600 transition-colors duration-200 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
              <div className="text-sm text-gray-600 items-center flex justify-between">
                <p
                  onClick={() => navigate(-1)}
                  className="text-gray-800 cursor-pointer hover:text-blue-500 inline-flex items-center ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back
                </p>
                <p className="hover:text-blue-500 cursor-pointer">Need help?</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
