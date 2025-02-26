import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="py-[10%] flex justify-center ">
      <form className="w-1/2 bg-black p-4 grid grid-cols-12">
        <input
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder="What do u like to see today?"
        />
        <button className="bg-red-500 m-4 py-2 px-4 text-white col-span-3 rounded-lg ">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
