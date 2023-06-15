import React from "react";

function Input({ name, state, setState, label=false }) {
  return (
    <div className="flex  w-full  items-center justify-between mt-10 font-semibold text-2xl">
      {label && (
        <label htmlFor={name} className="text-white text-lg px-1 mr-20">
          {name}
        </label>
      )}
      <div>
        <input
          type="text"
          name={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
        />
      </div>
    </div>
  );
}

export default Input;
