import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";
import Akash from "../../assets/Akash.jpeg";
import Satyam from "../../assets/Satyam.jpeg";
import Amjad from "../../assets/Amjad.jpeg";
import Qadir from "../../assets/Qadir.jpeg";
import Dilshad from "../../assets/Dilshad.jpeg";
import Anurag from "../../assets/Anurag.jpeg";
import { Link } from "react-router-dom";

function Testimonial() {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Creative Team
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            {/* What our <span className=" text-pink-500">customers</span> are
            saying */}
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border-t-2">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={Satyam}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Hi all I am Er. Satyam Singh. Basically, I am from Pratapgarh
                  and have been running a Pratapgarh adda social media since 5
                  years. and worked for different IT companies and am still
                  working. Also, I am a part of this webseries. If you have any
                  query related to our team or series you can ask freely to the
                  admin team🙂
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Satyam Singh
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Created By
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4 border-t-2">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={Qadir}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Qadir Khan Warsi is an emerging talent who gained recognition
                  on "India's Best Cinestar Ki Khoj." He's been seen in digital
                  series and music videos, notably in a negative role in
                  "Rangbaaz 3." He has exciting upcoming projects, including
                  "Delivery Boy: Pizza on Time" and "Laal Batti" by Prakash Jha.
                  Qadir is also working as a Chief Assistant Director on an
                  untitled music video alongside Kapil Sharma and Javed Ali,
                  showing his versatility and promising future in the
                  entertainment industry.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Qadir Khan Warsi
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Actor
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4 border-t-2">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={Dilshad}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Dilshad, hailing from Ajgara in Raniganj, Pratapgarh, is a
                  versatile character artist known for his roles in popular
                  series like "Bhaukal 2" and "Jamtara 2." He has also made a
                  mark in Bhojpuri cinema with his role in "Parwaz." Dilshad's
                  talent and dedication as an actor have earned him recognition
                  and a growing fan base, making him a promising name in the
                  entertainment industry.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Dilshad
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Actor
                </p>
              </div>
            </div>
         
          
          </div>
        </div>
     
      </section>
    
    </div>
  );
}

export default Testimonial;
