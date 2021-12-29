import type { NextPage } from "next";
import React from "react";
import Daily from "../../components/Daily";
import FoodDaily from "../../components/FoodDaily";
import Header from "../../components/Header";

const index: NextPage = () => {
  const todayMeals = [
    [
      {
        name: "Chicken",
        quantity: 100,
        carb: 1,
        prot: 30,
        fat: 5,
      },
      {
        name: "Rice",
        quantity: 300,
        carb: 80,
        prot: 5,
        fat: 1,
      },
    ],
    [
      {
        name: "Chicken",
        quantity: 100,
        carb: 1,
        prot: 30,
        fat: 5,
      },
      {
        name: "Rice",
        quantity: 300,
        carb: 80,
        prot: 5,
        fat: 1,
      },
    ],
  ];
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
        return <FoodDaily key={i} meal={meal}/>;
      })}
    </div>
  );
};

export default index;
