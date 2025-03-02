import React from "react";
import Lang from "../Utils/LanguageChange";
import {useSelector } from "react-redux";
const GPTSearchBar = () => {
  const lang = useSelector((store)=>store.language.lang);
  return (
    <div className="py-[10%] flex justify-center ">
      <form className="w-1/2 bg-black p-4 grid grid-cols-12">
        <input
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder={Lang[lang]?.placeholder}
        />
        <button className="bg-red-500 m-4 py-2 px-4 text-white col-span-3 rounded-lg ">
          {Lang[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
