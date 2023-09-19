import React, { useState, useRef } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { validateData } from "../utils/validate";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG } from "../utils/util";

const Login = () => {
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [toggle, setToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleForm = () => {
    setToggle(!toggle);
  };

  const handleClick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!toggle) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/128125286?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_BG}
          alt="background"
          className="h-screen md:h-full object-cover"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12  absolute bg-gray-950 p-12 mt-60 mx-auto right-0 left-0  text-white bg-opacity-90"
        >
          <h1 className="my-5  font-bold">{toggle ? "Sign In" : "Sign Up"}</h1>
          {!toggle && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 w-full  text-gray-400  bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone Number"
            className="p-4 my-2  w-full text-gray-400 bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full  text-gray-400  bg-gray-700"
          />
          <p className="my-3 text-red-500 ">{errorMessage}</p>

          <button
            type="submit"
            className="p-3 mt-8  bg-red-700 w-full"
            onClick={handleClick}
          >
            {toggle ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-9 text-gray-500">
            {toggle ? "New to NetFilx? " : "Already User? "}
            <span onClick={toggleForm} className="cursor-pointer text-white">
              {toggle ? " Sign up now" : " Sign in Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
