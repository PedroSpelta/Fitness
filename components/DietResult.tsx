import React, { useEffect, useState } from "react";
import { usePersonalDataContext } from "../context/personalData";

const dic: { [char: string]: number } = {
  ecto: 1.2,
  endo: 1,
  meso: 1.1,
  gain: 1.15,
  mantain: 1,
  lose: 0.85,
};

function DietResult() {
  //data provived from context
  const {
    age,
    height,
    weight,
    protkg,
    fatkg,
    sex,
    objective,
    type,
    calories,
    setCalories,
  } = usePersonalDataContext();

  // macro per day
  const protDay = (protkg * weight) / 100;
  const fatDay = (fatkg * weight) / 100;
  const carboDay = (calories - (protDay * 4 + fatDay * 9)) / 4;
  const basal: number =
    (sex === "male"
      ? Number((66.5 + 13.75 * weight + 5.03 * height - 6.8 * age).toFixed(0))
      : Number((665.1 + 9.56 * weight + 1.8 * height - 4.7 * age).toFixed(0))) *
    dic[type];

  useEffect(() => {
    if (objective === "mantain") return setCalories(Number(basal.toFixed(0)));
    else if (objective === "gain")
      return setCalories(Number((basal * 1.15).toFixed(0)));
    setCalories(Number((basal * 0.85).toFixed(0)));
  }, [objective, basal, setCalories]);

  return (
    <div className="col-span-2 pt-10">
      {/* Title */}
      <p className="text-xl font-semibold pb-3">Resultado</p>

      {/* Base metabolism*/}
      <p className="pt-3">Metabolismo basal</p>
      <div className="p-[6px] text-sm bg-gray-200 border rounded-md w-40">
        {basal} kcal
      </div>

      {/* Desired consume */}
      <p className="pt-3">Consumo diário</p>
      <div className="p-[6px] text-sm bg-gray-200 border rounded-md w-40">
        {calories} kcal
      </div>

      {/* Protein per day */}
      <p className="pt-3">Proteina/dia (g)</p>
      <div className="p-[6px] text-sm bg-gray-200 border rounded-md w-40">
        {protDay} g
      </div>
      <p className="pt-3">Gordura/dia (g)</p>
      <div className="p-[6px] text-sm bg-gray-200 border rounded-md w-40">
        {fatDay} g
      </div>
      <p className="pt-3">Carbo/dia (g)</p>
      <div className="p-[6px] text-sm bg-gray-200 border rounded-md w-40">
        {carboDay} g
      </div>
    </div>
  );
}

export default DietResult;
