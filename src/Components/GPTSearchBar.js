import React from "react";
import Lang from "../Utils/LanguageChange";
import { useDispatch, useSelector } from "react-redux";
import openaicall from "../Utils/OpenAI";
import { ChangeInput } from "../Utils/ToggleSlice";

const GPTSearchBar = () => {
  const lang = useSelector((store) => store.language.lang);
  const searchTest = useSelector((store) => store.Toggle.GPTSearchBar);
  const dispatch = useDispatch();

  // Handle input change by dispatching the action to update the Redux state
  const handlegptchange = (e) => {
    dispatch(ChangeInput(e.target.value));
  };

  // Handle GPT search
  const handlegptsearch = async () => {
    const correctsearch =
      "Give the 5 movies name suggestion of the given taste " + searchTest;

    const chatCompletion = await openaicall.chat.completions.create({
      messages: [{ role: "user", content: correctsearch }],
      model: "gpt-3.5-turbo",
    });

    // Log the choices from the response
    console.log(chatCompletion.choices);
  };

  return (
    <div className="py-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black p-4 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="col-span-9 p-4 m-4 cursor-text"
          placeholder={Lang[lang]?.placeholder}
          value={searchTest} // Use the value from Redux (controlled)
          onChange={handlegptchange} // Update Redux state on input change
        />
        <button
          className="bg-red-500 m-4 py-2 px-4 text-white col-span-3 rounded-lg"
          onClick={handlegptsearch}
        >
          {Lang[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
