import React from "react";
import FoodIngredient from "./FoodIngredient";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ITodayMeal } from "../libs/interfaces";
import FoodTotal from "./FoodTotal";

ChartJS.register(ArcElement, Tooltip, Legend);

const dougOptions = {
  // for a semi circle
  // rotation: -90,
  // circumference: 180,
  cutout: 0,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

function FoodDaily({ meal }: { meal: ITodayMeal }) {
  const quantity = meal.ingredients.reduce(
    (prev, cur) => prev + cur.quantity,
    0
  );
  const dougData = {
    labels: ["Proteína", "Carboidrato", "Gordura"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          meal.ingredients.reduce((prev, cur) => prev + cur.prot, 0),
          meal.ingredients.reduce((prev, cur) => prev + cur.carb, 0),
          meal.ingredients.reduce((prev, cur) => prev + cur.fat, 0),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div
      className={`w-[80%] md:w-full max-w-3xl min-h-[156px] mt-3 p-3 relative h-full shadow-md rounded-md bg-white flex flex-col `}
    >
      <div className="flex justify-between max-w-lg ">
        <p className="font-bold text-lg truncate">{meal.name}</p>
        <div className="flex text-center font-bold items-end w-fit text-sm">
          <p className="md:w-12 w-8 hidden md:inline">Carb.</p>
          <p className="md:w-12 w-8 hidden md:inline">Prot.</p>
          <p className="md:w-12 w-8 hidden md:inline">Gord.</p>
          <p className="w-12 visible">kcal</p>
          <p className="w-14 ml-5 visible">Peso</p>
        </div>
      </div>

      {meal.ingredients.map((ingredient, i) => (
        <FoodIngredient key={i} ingredient={ingredient} />
      ))}

      <FoodTotal ingredients={meal.ingredients} />

      <div className="h-28 w-28 absolute right-5 invisible md:visible top-[50%] -translate-y-[50%]">
        <Doughnut data={dougData} options={dougOptions} />
      </div>
    </div>
  );
}

export default FoodDaily;
