import React from "react";
import { borderColor } from "../styles/constants";
import FoodIngredient from "./FoodIngredient";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { IIngredient, ITodayMeal, ITodayMeals } from "../libs/interfaces";
import FoodTotal from "./FoodTotal";

ChartJS.register(ArcElement, Tooltip, Legend);

const dougOptions = {
  // for a semi circle
  // rotation: -90,
  // circumference: 180,
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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className={`w-full max-w-3xl min-h-[156px] mt-3 p-3 relative shadow-md rounded-md bg-white`}
    >
      <div className="flex justify-between max-w-lg border-b-2 border-black">
        <p className="font-bold text-lg">{meal.name}</p>
        <div className="flex text-center font-bold items-end">
          <p className="w-12 bg-gray-300">Carb.</p>
          <p className="w-12">Prot.</p>
          <p className="w-12 bg-gray-300">Gord.</p>
          <p className="w-14 ml-5">Peso</p>
        </div>
      </div>
      {meal.ingredients.map((ingredient, i) => (
        <FoodIngredient key={i} ingredient={ingredient} />
      ))}
      <div className="border-t-2 max-w-lg border-black">
        <FoodTotal ingredients={meal.ingredients}/>
      </div>
      <div
        className="h-32 w-32 absolute right-5 invisible md:visible"
        style={{
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      >
        <Doughnut data={dougData} options={dougOptions} />
      </div>
    </div>
  );
}

export default FoodDaily;
