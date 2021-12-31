import type { NextPage } from "next";
import React, { useState } from "react";
import Daily from "../../components/Daily";
import FoodDaily from "../../components/FoodDaily";
import Header from "../../components/Header";
import { defaultTodayMeals } from "../../libs/constants";

const Index: NextPage = () => {
  const [todayMeals, setTodayMeals] = useState(defaultTodayMeals)

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full">
          Seu diário
        </p>
      </div>
      
      <Daily />
      {todayMeals.map((meal, i) => {
        return <FoodDaily key={i} meal={meal} />;
      })}
    </div>
  );
};

export default Index;
