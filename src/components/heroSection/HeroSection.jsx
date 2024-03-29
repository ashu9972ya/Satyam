import React, {useContext} from "react";
import Poster from "../../assets/Poster.jpeg";
import MyContext from "../../context/data/MyContext";
import { Link } from "react-router-dom";
function HeroSection() {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
    <div className="container px-4 py-6 md:py-12">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <img
          alt="Banner"
          className="rounded-lg object-cover"
          height="200"
          src={Poster}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Unearth the Extraordinary</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Elevate your lifestyle with our curated collection of exceptional products.
          </p>
        </div>
        <Link className="btn btn-lg" to="#">
          Explore Collection
        </Link>
      </div>
    </div>
  </section>
  );
}

export default HeroSection;
