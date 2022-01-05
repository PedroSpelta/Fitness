import type { NextPage } from "next";
import React from "react";
import AddMeal from "../../components/AddMeal";
import Daily from "../../components/Daily";
import DailyDashboard from "../../components/DailyDashboard";
import FoodDaily from "../../components/FoodDaily";
import Header from "../../components/Header";
import WeeklyDash from "../../components/WeeklyDash";
import { useFoodContext } from "../../context/foodContext";

const Index: NextPage = () => {
  const { todayMeals } = useFoodContext();
  return (
    <div className="flex flex-col justify-center items-center bg-[#fafafa]">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full">
          Seu diário
        </p>
      </div>
      <DailyDashboard />
      {/* <WeeklyDash data={[10,20,30]} /> */}
      {todayMeals.map((meal, i) => {
        return <FoodDaily key={i} meal={meal} />;
      })}
      <AddMeal />
    </div>
  );
};

export default Index;
