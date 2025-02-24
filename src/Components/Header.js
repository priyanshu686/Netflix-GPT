import React from "react";
import { Logo_Netflix } from "../Utils/Img_Links";
import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const selector = useSelector((state) => state?.userd?.user); // Get user from Redux store
  console.log(selector);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleclick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        dispatch(removeuser());  // Remove user from Redux store
        navigate("/");  // Redirect to login or home page
      })
      .catch((error) => {
        // An error happened
        console.log(error.message);
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-30 flex justify-between">
      <img className="w-44" src={Logo_Netflix} alt="Logo" />

      {/* Conditional rendering */}
      {selector && selector.length !== 0 ? (
  // User is logged in and selector is not empty
  <div>
    <span className="text-white">Welcome, {selector[0]?.displayName}</span> {/* Display user's name */}
    <button
      className="text-white bg-red-600 px-4 py-2 rounded"
      onClick={() => { handleclick() }}
    >
      Sign Out
    </button>
  </div>
) : null}

    </div>
  );
};

export default Header;
