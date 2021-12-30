import React from "react";
import { borderColor } from "../styles/constants";
import FoodIngredient from "./FoodIngredient";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { IIngredient, ITodayMeal, ITodayMeals } from "../libs/interfaces";

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
  const quantity = meal.ingredients.reduce((prev,cur) => prev + cur.quantity, 0)
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
      className={`w-full border max-w-3xl min-h-[156px] mt-3 p-3 relative`}
      style={{ borderColor: borderColor }}
    >
      <div className="flex justify-between max-w-lg border-b-2 border-black">
        <p className="font-bold text-lg">{meal.name}</p>
        <p className="font-bold text-lg">{quantity}g</p>
      </div>
      {meal.ingredients.map((ingredient, i) => (
        <FoodIngredient key={i} ingredient={ingredient} />
      ))}
      <div
        className="h-32 w-32 absolute right-5"
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
