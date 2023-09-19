import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO } from "../utils/util";
import { showGptSearch } from "../utils/gptSlice";
import { LANG_SUPPORT } from "../utils/util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleToggleSearch = () => {
    dispatch(showGptSearch());
  };

  const handleLanguageChnage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const user = useSelector((store) => store.user);
  const toggle = useSelector((store) => store.gpt.toggledgptbtn);
  return (
    <div className="absolute px-3 md:px-6 py-2 md:py-4 bg-gradient-to-b from-gray-900 z-10 w-full flex flex-col md:flex-row justify-between">
      <img
        src={NETFLIX_LOGO}
        alt="logo"
        className="md:w-44 w-32 mx-auto md:mx-0"
      />
      {user && (
        <div className="flex  justify-between items-center px-1 md:px-3  mt-2 md:mt-0">
          {toggle && (
            <select
              className="py-3 px-5 m-2 border border-white bg-slate-700 text-white "
              onChange={handleLanguageChnage}
            >
              {LANG_SUPPORT.map((lang) => (
                <option
                  className=" py-1  bg-slate-700 text-white"
                  value={lang.identifier}
                  key={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="md:py-3 py-2 px-2 md:px-5 bg-purple-600 rounded-sm mx-3 text-white"
            onClick={handleToggleSearch}
          >
            {toggle ? (
              <div>
                <FontAwesomeIcon icon={faHouse} />
              </div>
            ) : (
              <d>
                <FontAwesomeIcon icon={faSearch} />
                <span className="px-2">GPT </span>
              </d>
            )}
          </button>
          <div className="flex items-center justify-end">
            <img
              src={user.photoURL}
              alt="logo"
              className="md:w-12 w-10  md:h-12 h-10  rounded-full hidden md:inline-block"
            />
            <button
              className="md:py-3 py-2 px-3 md:px-5 bg-gray-700 text-white rounded-full md:rounded-md mx-3"
              onClick={handleSignOut}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-white"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
