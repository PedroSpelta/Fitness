import React, { useEffect, useState } from "react";
import { useFoodContext } from "../context/foodContext";
import { usePersonalDataContext } from "../context/personalData";
import DailyDashboardCalories from "./DailyDashboardCalories";
import DailyDashboardCard from "./DailyDashboardCard";
import DailyDashboarMacro from "./DailyDashboarMacro";

function DailyDashboard() {
  const { caloriesGoal, protPerDay, fatPerDay, carbPerDay } =
    usePersonalDataContext();
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

  const consumedFatP = ((consumedMacros.fat * 100) / fatPerDay).toFixed(1);
  const consumedProtP = ((consumedMacros.prot * 100) / protPerDay).toFixed(1);
  const consumedCarbP = ((consumedMacros.carb * 100) / carbPerDay).toFixed(1);

  return (
    <div className="w-full max-w-3xl grid md:grid-cols-3  mt-5 gap-5">
      {/* card de meta do dia */}
      <DailyDashboardCard cols={1}>
        <div className="flex w-full h-full justify-between">
          <div className="w-[160px]">
            <p className="text-sm font-semibold ">Metas</p>
            <p className="text-4xl font-bold mt-1">
              {caloriesGoal}
              <span className="text-sm font-normal">kcal</span>
            </p>
            <div className="font-semibold">
              <p className="text-sm">
                Gorduras <span className="text-[#FFC534]">{fatPerDay}g</span>
              </p>
              <p className=" text-sm">
                Proteinas <span className="text-[#ff6384]">{protPerDay}g</span>
              </p>
              <p className=" text-sm">
                Carboidratos{" "}
                <span className="text-[#36a2eb]">{carbPerDay}g</span>
              </p>
            </div>
          </div>
        </div>
      </DailyDashboardCard>

      {/* card de macros do dia */}
      <DailyDashboardCard cols={1}>
        <div className="flex">
          <DailyDashboarMacro
            done={consumedMacros.fat}
            total={fatPerDay}
            bgColor="#FFCE56"
            label="Gordura"
          />
          <DailyDashboarMacro
            done={consumedMacros.prot}
            total={protPerDay}
            bgColor="#FF6384"
            label="Proteina"
          />
          <DailyDashboarMacro
            done={consumedMacros.carb}
            total={carbPerDay}
            bgColor="#36A2EB"
            label="Carbo"
          />
        </div>

        {/* <div className=" h-full flex items-end gap-2 justify-center text-sm font-semibold mx-auto ">
          <div className="h-full flex flex-col bg-[#f1f1f1] justify-end w-10 md:w-10">
            <p className="text-center">{`${consumedFatP}%`}</p>
            <div
              className="bg-[#FFC534] w-10 md:w-10"
              style={{ height: `${consumedFatP}%` }}
            ></div>
          </div>
          <div className="h-full flex flex-col bg-[#f1f1f1] justify-end w-10 md:w-10">
            <p className="text-center">{`${consumedProtP}%`}</p>
            <div
              className="bg-[#ff6384] w-10 md:w-10"
              style={{ height: `${consumedProtP}%` }}
            ></div>
          </div>
          <div className="h-full flex flex-col bg-[#f1f1f1] justify-end w-10 md:w-10">
            <p className="text-center">{`${consumedCarbP}%`}</p>
            <div
              className="bg-[#36a2eb] w-5 md:w-10"
              style={{ height: `${consumedCarbP}%` }}
            ></div>
          </div>
        </div> */}
      </DailyDashboardCard>

      {/* card de calorias do dia */}
      <DailyDashboardCard cols={1}>
        <p className="text-sm font-semibold ">Calorias</p>
        <div className="relative mt-4">
          <DailyDashboardCalories
            data={[
              consumedMacros.calories,
              caloriesGoal - consumedMacros.calories,
            ]}
          />
          <p className="absolute bottom-0 right-[50%] translate-x-[50%] font-bold text-3xl -z-2">
            {((consumedMacros.calories * 100) / caloriesGoal).toFixed(1)}%
          </p>
        </div>
      </DailyDashboardCard>
    </div>
  );
}

export default DailyDashboard;
