import React, { useState } from "react";
import { containerWidth } from "../libs/containers";
import MacroCircle from "./MacroCircle";

function Daily() {
  const [] = useState();
  const personalData = {
    calories: 3500,
    carbo: 150,
    fat: 80,
    protein: 160,
  };

  const todayData = {
    calories: 100,
    carbo: 10,
    fat: 16,
    protein: 16,
  };

  return (
    <div className={` h-[50px] bg-blue-600`} style={{ width: containerWidth }}>
      {/* header */}
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Seu dia</p>
      </div>
      {/* body */}
      <div className="bg-red-500 flex justify-between">
        <div>
          <p>Restam:</p>
          <span className="text-4xl">
            {personalData.calories - todayData.calories}
          </span>
          <span className="text-xs">kcal</span>
        </div>
        <div className="bg-red-500 flex justify-end">
          <MacroCircle
            percentage={todayData.carbo / personalData.carbo}
            absolute={personalData.carbo}
          />
          <MacroCircle
            percentage={todayData.fat / personalData.fat}
            absolute={personalData.fat}
          />
          <MacroCircle
            percentage={todayData.protein / personalData.protein}
            absolute={personalData.protein}
          />
        </div>
      </div>
    </div>
  );
}

export default Daily;
