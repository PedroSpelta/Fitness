import React, { useEffect, useState } from "react";
import { useFoodContext } from "../context/foodContext";
import { usePersonalDataContext } from "../context/personalData";
import DailyDashboardCalories from "./DailyDashboardCalories";
import DailyDashboardCard from "./DailyDashboardCard";
import DailyDashboarMacro from "./DailyDashboarMacro";

function DailyDashboard() {
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

  return (
    <div className="w-full max-w-3xl grid md:grid-cols-3  mt-5 gap-5">
      {/* card de meta do dia */}
      <DailyDashboardCard>
        <p className="text-sm font-semibold ">Metas</p>
        <p className="text-5xl font-bold mt-2">
          {calories}
          <span className="text-sm font-normal">kcal</span>
        </p>
        <div className="grid grid-cols-3 text-sm mx-auto text-center mt-6">
          <div className="col-span-1">
            <p className="text-sm">C: {macrosPerDay.carb}g</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm">P: {macrosPerDay.prot}g</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm">G: {macrosPerDay.fat}g</p>
          </div>
        </div>
      </DailyDashboardCard>

      {/* card de macros do dia */}
      <DailyDashboardCard>
        <p className="text-sm font-semibold ">Macros</p>

        <DailyDashboarMacro
          data={[consumedMacros.carb, consumedMacros.prot, consumedMacros.fat]}
        />
      </DailyDashboardCard>

      {/* card de calorias do dia */}
      <DailyDashboardCard>
        <p className="text-sm font-semibold ">Calorias</p>
        <div className="relative mt-4">
          <DailyDashboardCalories
            data={[consumedMacros.calories, calories - consumedMacros.calories]}
          />
          <p className="absolute bottom-0 right-[50%] translate-x-[50%] font-bold text-3xl -z-2">
            {(consumedMacros.calories*100 / calories).toFixed(1)}%
          </p>
        </div>
      </DailyDashboardCard>
    </div>
  );
}

export default DailyDashboard;
