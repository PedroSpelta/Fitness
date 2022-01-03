import React from "react";
import DailyDashboardCalories from "./DailyDashboardCalories";
import DailyDashboardCard from "./DailyDashboardCard";
import DailyDashboarMacro from "./DailyDashboarMacro";

function DailyDashboard() {
  
  return (
    <div className="w-full max-w-3xl grid md:grid-cols-3  mt-5 gap-5">
      {/* card de meta do dia */}
      <DailyDashboardCard>
        <p className="text-sm font-semibold ">Metas</p>
        <p className="text-5xl font-bold mt-2">
          2500<span className="text-sm font-normal">kcal</span>
        </p>
        <div className="grid grid-cols-3 text-sm mx-auto text-center mt-6">
          <div className="col-span-1">
            <p className="text-sm">C: 10g</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm">P: 10g</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm">G: 10g</p>
          </div>
        </div>
      </DailyDashboardCard>

      {/* card de macros do dia */}
      <DailyDashboardCard>
        <p className="text-sm font-semibold ">Macros</p>

        <DailyDashboarMacro data={[30, 20, 10]} />
      </DailyDashboardCard>

      {/* card de calorias do dia */}
      <DailyDashboardCard>
        <p className="text-sm font-semibold ">Calorias</p>
        <div className="relative mt-4">
          <DailyDashboardCalories data={[100, 200]} />
          <p className="absolute bottom-0 right-[50%] translate-x-[50%] font-bold text-3xl">
            50%
          </p>
        </div>
      </DailyDashboardCard>
    </div>
  );
}

export default DailyDashboard;
