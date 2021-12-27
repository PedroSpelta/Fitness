import React from "react";

const inputStyle: string = "bg-gray-200 p-2 rounded-md w-40";

function DietFormInput({ name, label }: {name: string, label: string, }) {
  return (
    <>
      <label htmlFor="name">Idade:</label>
      <input type="number" name="name" id="name" className={inputStyle} />
    </>
  );
}

export default DietFormInput;
