import React, { useState } from "react";
import { usePersonalDataContext } from "../context/personalData";

const inputStyle: string = "bg-gray-200 p-2 rounded-md w-40 text-sm h-[34px]";

function DietForm() {
  const [bioTip, setBioTip] = useState(true);
  const {
    age,
    fatkg,
    height,
    weight,
    protkg,
    setType,
    setObjective,
    setSex,
    setAge,
    setFatkg,
    setWeight,
    setProtkg,
    setHeight,
  } = usePersonalDataContext();
  return (
    <div className="pt-10 col-span-1">
      <form className="flex flex-col">
        <p className="text-xl pb-3 font-semibold">Informações</p>

        {/* sexo */}
        <label htmlFor="sex" className="pt-3">Sexo:</label>
        <select
          name="sex"
          id="sex"
          className={inputStyle}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="male">Homem</option>
          <option value="female">Mulher</option>
        </select>
        {/* Biotipo */}
        <label htmlFor="bio" className="pt-3">Biotipo:</label>
        <div
          className="relative"
          onMouseEnter={() => setBioTip((state: boolean) => !state)}
          onMouseLeave={() => setBioTip((state: boolean) => !state)}
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
          <select
            name="bio"
            id="bio"
            className={`${inputStyle}`}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="ecto">Ectomorfo</option>
            <option value="meso">Mesomorfo</option>
            <option value="endo">Endomorfo</option>
          </select>
        </div>
        {/* Idade */}
        <label htmlFor="age" className="pt-3">Idade:</label>
        <div className="relative w-40">
          <p className="absolute right-2 pt-1 ">anos</p>
          <input
            type="number"
            name="age"
            id="age"
            value={Number(age).toString()}
            onChange={(e) => {
              setAge(Number(e.target.value));
            }}
            className={inputStyle}
          />
        </div>
        {/* Altura */}
        <label htmlFor="height" className="pt-3">Altura em cm:</label>
        <div className="relative w-40">
          <p className="absolute right-2 pt-1 ">cm</p>
          <input
            type="number"
            name="height"
            id="height"
            value={Number(height).toString()}
            onChange={(e) => setHeight(Number(e.target.value))}
            className={inputStyle}
          />
        </div>
        {/* Peso */}
        <label htmlFor="weight" className="pt-3">Peso em kg:</label>
        <div className="relative w-40">
          <p className="absolute right-2 pt-1 ">kg</p>

          <input
            type="number"
            name="weight"
            id="weight"
            value={Number(weight).toString()}
            onChange={(e) => setWeight(Number(e.target.value))}
            className={inputStyle}
          />
        </div>
        {/* Objetivo */}
        <label htmlFor="objective" className="pt-3">Objetivo:</label>
        <select
          name="objective"
          id="objective"
          className={inputStyle}
          onChange={(e) => setObjective(e.target.value)}
        >
          <option value="mantain">Manter</option>
          <option value="lose">Perder</option>
          <option value="gain">Ganhar</option>
        </select>
        {/* Protein range */}
        <label htmlFor="proteinRange" className="mt-2">
          Proteina por kg:
        </label>
        <input
          type="range"
          min={0}
          max={500}
          value={protkg}
          onChange={(e) => setProtkg(Number(e.target.value))}
          className="w-40 mt-3"
        />
        <p className="text-center w-40">{protkg / 100}</p>
        {/* Fat range */}
        <label htmlFor="fatRange" className="mt-2">
          Gordura por kg:
        </label>
        <input
          type="range"
          min={0}
          max={500}
          value={fatkg}
          onChange={(e) => setFatkg(Number(e.target.value))}
          className="w-40 mt-3"
        />
        <p className="text-center w-40">{fatkg / 100}</p>
      </form>
    </div>
  );
}

export default DietForm;
