import type { NextPage } from "next";
import React, { useState } from "react";
import AddMeal from "../../components/AddMeal";
import DailyDashboard from "../../components/DailyDashboard";
import FoodDaily from "../../components/FoodDaily";
import Header from "../../components/Header";
import { useFoodContext } from "../../context/foodContext";

const Index: NextPage = () => {
  const { todayMeals } = useFoodContext();
  const [isAddVisible, setIsAddVisible] = useState(false);
  return (
    <div className="flex flex-col items-center bg-[#fafafa] h-screen">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full">
          Seu diário
        </p>
      </div>
      <DailyDashboard />
      {/* <WeeklyDash data={[10,20,30]} /> */}
      {todayMeals.map((meal, i) => {
        return <FoodDaily key={i} meal={meal} position={i} />;
      })}
      {isAddVisible ? (
        <AddMeal
          closeHandler={() => {
            setIsAddVisible(false);
          }}
        />
      ) : (
        <button
          onClick={() => setIsAddVisible(true)}
          className="bg-blue-500 text-white rounded-md p-1 mt-2"
        >
          Adicionar refeição
        </button>
      )}
    </div>
  );
};

export default Index;
