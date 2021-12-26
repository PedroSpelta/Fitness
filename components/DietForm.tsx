import React from "react";
import { containerWidth } from "../libs/containers";

const inputStyle: string = "bg-gray-200 p-2 rounded-md w-40"

function DietForm() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="bg-blue-900 w-screen flex justify-center">
        <p
          className="text-white text-lg font-semibold py-3"
          style={{ width: containerWidth }}
        >
          Preencha com seus dados abaixo
        </p>
      </div>
      <div style={{ width: containerWidth }} className="pt-10">
        <form className="flex flex-col">
          <label htmlFor="sex">Sexo:</label>
          <select
            name="sex"
            id="sex"
            className={inputStyle}
          >
            <option value="male">Homem</option>
            <option value="female">Mulher</option>
          </select>

          <label htmlFor="age">Idade:</label>
          <input
            type="number"
            name="age"
            id="age"
            className={inputStyle}
          />
        </form>
      </div>
    </div>
  );
}

export default DietForm;
