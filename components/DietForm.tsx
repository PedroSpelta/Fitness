import React, { useState } from "react";
import { containerWidth } from "../libs/containers";

const inputStyle: string = "bg-gray-200 p-2 rounded-md w-40";

function DietForm() {
  const [bioTip, setBioTip] = useState(true);
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
          {/* sexo */}
          <label htmlFor="sex">Sexo:</label>
          <select name="sex" id="sex" className={inputStyle}>
            <option value="male">Homem</option>
            <option value="female">Mulher</option>
          </select>
          {/* Biotipo */}
          <label htmlFor="bio">Biotipo:</label>
          <div
            className="relative"
            onMouseEnter={() => setBioTip((state) => !state)}
            onMouseLeave={() => setBioTip((state) => !state)}
          >
            <p
              className={`bg-white p-3 border absolute left-40 ${
                bioTip && "hidden"
              }`}
            >
              Ectomorfo tendência a ser magro, esguio.
              <br />
              Mesomorfo tendência a ter corpo atlético.
              <br />
              Endomorfo tendência a ter corpo mais largo.
            </p>
            <select name="bio" id="bio" className={`${inputStyle}`}>
              <option value="ecto">Ectomorfo</option>
              <option value="meso">Mesomorfo</option>
              <option value="endo">Endomorfo</option>
            </select>
          </div>
          {/* Idade */}
          <label htmlFor="age">Idade:</label>
          <input type="number" name="age" id="age" className={inputStyle} />
          {/* Altura */}
          <label htmlFor="height">Altura em cm:</label>
          <input
            type="number"
            name="height"
            id="height"
            className={inputStyle}
          />
          {/* Peso */}
          <label htmlFor="weight">Peso em kg:</label>
          <input
            type="number"
            name="weight"
            id="weight"
            className={inputStyle}
          />
          {/* Objetivo */}
        </form>
      </div>
    </div>
  );
}

export default DietForm;
