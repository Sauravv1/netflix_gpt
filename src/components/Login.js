import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
        alt="BackgroundImage"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-95"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        <form className="w-3/12  p-12 bg-black text-white rounded-lg bg-opacity-70">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm&& (<input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded"
          />)}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded"
          />
         
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer"  onClick={toggleSignInForm} >
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now."}
            
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
