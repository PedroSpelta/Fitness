import React, { useEffect, useState } from "react";
import { usePersonalDataContext } from "../context/personalData";

function DietResult() {
  //data provived from context
  const { weight, protkg, fatkg, caloriesBasal, caloriesGoal } =
    usePersonalDataContext();

  // macro per day
  const protDay = Number((protkg * weight).toFixed(2));
  const fatDay = Number((fatkg * weight).toFixed(2));
  const carboDay = Number(
    ((caloriesGoal - (protDay * 4 + fatDay * 9)) / 4).toFixed(2)
  );

  // useEffect(() => {
  //   setCarbkg(carboDay / weight);
  // }, [carboDay, weight, setCarbkg]);

  return (
    <div className="mx-10 pt-10">
      {/* Title */}
      <p className="text-xl font-semibold pb-3">Resultado</p>

      {/* Base metabolism*/}
      <p className="pt-3">Metabolismo</p>
      <div className="p-[6px] text-sm bg-gray-200 border rounded-md w-40">
        {caloriesBasal} kcal
      </div>

      {/* Desired consume */}
      <p className="pt-3">Consumo diário</p>
      <div className="p-[6px] text-sm bg-gray-200 border rounded-md w-40">
        {caloriesGoal} kcal
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
