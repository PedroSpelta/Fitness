import React, { useEffect, useState } from "react";
import { useFoodContext } from "../context/foodContext";
import { usePersonalDataContext } from "../context/personalData";
import DailyButton from "./DailyButton";
import MacroCircle from "./MacroCircle";

function Daily() {
  const { calories, macrosPerDay } = usePersonalDataContext();
  const { todayMeals } = useFoodContext();

  const [consumedMacros, setConsumedMacros] = useState({
    prot: 0,
    carb: 0,
    fat: 0,
    calories: 0,
  });

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
    const calories = (carb + prot) * 4 + fat * 9;
    setConsumedMacros({ carb, prot, fat, calories });
  }, [todayMeals]);

  const dailyCalWidth = `${((consumedMacros.calories / calories) * 100).toFixed(
    0
  )}%`;

  return (
    <div className="border border-gray-400 max-w-3xl w-full p-5 mt-8 grid grid-cols-4">
      <div className="w-full col-span-3">
        <div className="flex justify-around w-full">
          <div>
            <p className="text-sm text-gray-400">Restam:</p>
            <span className="text-4xl font-semibold">
              {calories - consumedMacros.calories}
            </span>
            <span className="text-xs text-gray-500">kcal</span>
          </div>
          <div>
            <p className="text-sm text-gray-400">Meta:</p>
            <span className="text-4xl font-semibold">{calories}</span>
            <span className="text-xs text-gray-500">kcal</span>
          </div>
        </div>
        <div className="w-full border-gray-900 bg-gray-300 rounded-md">
          <div
            className={`mt-3 h-6 bg-gray-900 rounded-md`}
            style={{ width: dailyCalWidth }}
          ></div>
        </div>
      </div>
      <MacroCircle macros={consumedMacros} />
      <DailyButton />
    </div>
  );
}

export default Daily;
