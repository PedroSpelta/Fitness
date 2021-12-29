import React, { useState } from "react";
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
    calories: 3000,
    carbo: 10,
    fat: 16,
    protein: 16,
  };

  const dailyCalWidth = `${((todayData.calories/personalData.calories)*100).toFixed(0)}%`

  return (
    <div className="border border-gray-400 max-w-3xl w-full p-5 mt-8">
      <div className="flex justify-between w-full">
        <div>
          <p className="text-sm text-gray-400">Restam:</p>
          <span className="text-4xl font-semibold">
            {personalData.calories - todayData.calories}
          </span>
          <span className="text-xs text-gray-500">kcal</span>
        </div>
        <div className=" flex justify-end">

        <MacroCircle
            completed={todayData.protein}
            missing={ personalData.protein -todayData.protein}
          />
          <MacroCircle
            completed={todayData.carbo}
            missing={personalData.carbo -todayData.carbo}
          />
          <MacroCircle
            completed={todayData.fat}
            missing={personalData.fat -todayData.fat}
          />
        </div>
      </div>
      <div className="w-full border-gray-900 bg-gray-300 rounded-md">
      <div className={`mt-3 h-6 bg-gray-900 rounded-md`} style={{width:dailyCalWidth}}></div>

      </div>
      {dailyCalWidth}
    </div>
  );
}

export default Daily;
