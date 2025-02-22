import React, { useRef, useState } from "react";
import { BG_Netflix } from "../Utils/Img_Links";
import Header from "./Header";
import { ValidateSignIn, ValidateSignUp } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [Check, setCheck] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleSubmit = () => {
    const check = isSignIn
      ? ValidateSignIn(email.current.value, password.current.value)
      : ValidateSignUp(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setCheck(check);
    if (check != null) {
      return;
    }

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          alert("Account Created");
          setisSignIn(!isSignIn);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert({ errorMessage });
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("Welcome Back");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img className="h-709" src={BG_Netflix} alt="Background-Image" />
      </div>
      <div className="">
        <form
          className="w-4/12 absolute bg-black bg-opacity-75 my-36 mx-auto p-12  right-0 left-0  rounded-lg"
          onSubmit={(e) => {
            e.preventDefault(); // Used to stop submitting form if we click on SignIn/SignUp button
          }}
        >
          <h1 className="text-white font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Mobile Number"
            className="p-4 my-4 w-full bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 "
          />
          <p className="text-red-500 font-bold">{Check}</p>
          <button
            className="p-4 my-4 w-full rounded-lg bg-red-700"
            onClick={handleSubmit}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="py-4 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "New to Netfix? Sign Up Now" : "Already Have Account"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
