import React from "react";

export const Input = ({label, state, setState}) => {

  return (
    <>
      <label className="block text-zinc-900 font-normal mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-900 leading-tight focus:outline-none focus:shadow-outline"
        value={state}
        onChange={e => setState(e.target.value)}
        type="text"
        placeholder={label}
      />
    </>
  );
};
