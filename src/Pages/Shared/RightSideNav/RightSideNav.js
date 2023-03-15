import React, { useContext } from "react";
import "./RightSideNav.css";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div
        className="btn-group-vertical w-100"
        role="group"
        aria-label="Vertical button group"
      >
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn btn-outline-primary my-2"
        >
          <FaGoogle></FaGoogle> Log in with Google
        </button>
        <button type="button" className="btn btn-outline-dark">
          <FaGithub></FaGithub> Log in with GitHub
        </button>
      </div>

      <div className="my-4">
        <h5>Find us on</h5>
        <ul className="list-group">
          <li className="my-1 border rounded border-top-1 list-group-item">
            <FaFacebook /> Facebook
          </li>
          <li className="my-1 border rounded border-top-1 list-group-item">
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </li>
          <li className="my-1 border rounded border-top-1 list-group-item">
            <FaTwitter /> Twitter
          </li>
          <li className="my-1 border rounded border-top-1 list-group-item">
            <FaTwitch /> Twitch
          </li>
          <li className="my-1 border rounded border-top-1 list-group-item">
            And a fifth one
          </li>
        </ul>
      </div>

      {/* carousel component */}
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
