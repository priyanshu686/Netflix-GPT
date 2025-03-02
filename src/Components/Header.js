import React, { useEffect } from "react";
import { Logo_Netflix } from "../Utils/Img_Links";
import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { adduser } from "../Utils/UserSlice";
import { ChangeToggle } from "../Utils/ToggleSlice";
import { Language_Support } from "../Utils/Img_Links";
import { addLang } from "../Utils/LanguageSlice";
const Header = () => {
  const selector = useSelector((state) => state.userd); // Get user from Redux store
  // console.log(selector);
  const lang1 = useSelector((store) => store.language.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Toggle = useSelector((store)=>store.Toggle?.Toggle);
  const handleSearch =()=>{
    dispatch(ChangeToggle())
  }
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
  
  const handleChange =(e)=>{
    console.log(e)
    dispatch(addLang(e.target.value))
    // console.log(e.target.value);
  }


  useEffect(() => {
    onAuthStateChanged(auth, (selector) => {
      if (selector) {
        const { uid, email, displayName } = selector;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/Browser");
        // console.log(selector.displayName);
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute px-8 py-2 h-36  bg-gradient-to-b from-black w-full z-30 flex justify-between">
      <img className="w-44" src={Logo_Netflix} alt="Logo" />
      {selector && (
        <div>
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={() => handleSearch()}
          >
            {Toggle ? "Home Page":"GPT Search"}
          </button>
          {Toggle && (<>
          <select className="mx-2" value={lang1} onChange={(e)=>handleChange(e)} >
            {Language_Support.map((lang)=> <option value={lang.identifier}>{lang.name}</option>)}
          </select>
          </>)}
          <span className="text-white my-3">Welcome, {selector?.displayName}</span>{" "}
          {/* Display user's name */}
          <button
            className="text-white bg-red-600 px-4 py-2 rounded"
            onClick={() => {
              handleclick();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
