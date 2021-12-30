import React, { useEffect, useState } from "react";
import { useFoodContext } from "../context/foodContext";
import { usePersonalDataContext } from "../context/personalData";
import { defaultTodayMeals } from "../libs/constants";
import MacroCircle from "./MacroCircle";

function Daily() {
  const { calories, macrosPerDay } = usePersonalDataContext();
  const { todayMeals } = useFoodContext();
  
  const [consumedMacros, setConsumedMacros] = useState({
    prot: 0,
    carb: 0,
    fat: 0,
  });

  const personalData = {
    calories: 3500,
    carbo: 150,
    fat: 80,
    protein: 160,
  };

  useEffect(() => {
    let carb = 0;
    let prot = 0;
    let fat = 0;
    for (let m = 0; m < todayMeals.length; m += 1) {
      const { ingredients } = todayMeals[m];

      for (let i = 0; i < ingredients.length; i += 1) {
        carb += ingredients[i].carb;
        prot += ingredients[i].prot;
        fat += ingredients[i].fat;
      }
    }
    setConsumedMacros({ carb, prot, fat });
  }, [todayMeals]);

  const dailyCalWidth = `${((calories / personalData.calories) * 100).toFixed(
    0
  )}%`;

  return (
    <div className="border border-gray-400 max-w-3xl w-full p-5 mt-8">
      <div className="flex justify-between w-full">
        <div>
          <p className="text-sm text-gray-400">Restam:</p>
          <span className="text-4xl font-semibold">
            {personalData.calories - calories}
          </span>
          <span className="text-xs text-gray-500">kcal</span>
        </div>
        <div className=" flex justify-end">
          <MacroCircle
            completed={consumedMacros.prot}
            missing={personalData.protein - consumedMacros.prot}
          />
          <MacroCircle
            completed={consumedMacros.carb}
            missing={personalData.carbo - consumedMacros.carb}
          />
          <MacroCircle
            completed={consumedMacros.fat}
            missing={personalData.fat - consumedMacros.fat}
          />
        </div>
      </div>
      <div className="w-full border-gray-900 bg-gray-300 rounded-md">
        <div
          className={`mt-3 h-6 bg-gray-900 rounded-md`}
          style={{ width: dailyCalWidth }}
        ></div>
      </div>
    </div>
  );
}

export default Daily;
