import React, { useEffect } from "react";
import { Logo_Netflix } from "../Utils/Img_Links";
import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { adduser } from "../Utils/UserSlice";


const Header = () => {
  const selector = useSelector((state) => state.userd); // Get user from Redux store
  // console.log(selector);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleclick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful// Redirect to login or home page
      })
      .catch((error) => {
        // An error happened
        console.log(error.message);
      });
  };

  useEffect(()=>{
    onAuthStateChanged(auth, (selector) => {
      if (selector) {
        const {uid ,  email , displayName} = selector;
        dispatch(adduser({
                    uid: uid ,
                    email: email,
                    displayName: displayName
                  }));
        navigate('/Browser');
        // console.log(selector.displayName);
      } else {
        dispatch(removeuser()); 
        navigate('/');
        
      }
    });
  },[])

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-30 flex justify-between">
      <img className="w-44" src={Logo_Netflix} alt="Logo" />

      {/* Conditional rendering */}
      {selector && (
  // User is logged in and selector is not empty
  <div>
    <span className="text-white">Welcome, {selector?.displayName}</span> {/* Display user's name */}
    <button
      className="text-white bg-red-600 px-4 py-2 rounded"
      onClick={() => { handleclick() }}
    >
      Sign Out
    </button>
  </div>
)}

    </div>
  );
};

export default Header;
