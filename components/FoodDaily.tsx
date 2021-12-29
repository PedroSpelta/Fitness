import React from "react";
import { borderColor } from "../styles/constants";
import FoodIngredient from "./FoodIngredient";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const dougData = {
  labels: ["Proteína", "Carboidrato", "Gordura"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
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

const dougOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

function FoodDaily() {
  const meal = [
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
      carb: 80, // const;

      prot: 5,
      fat: 1,
    },
  ];

  const dougData = {
    labels: ["Proteína", "Carboidrato", "Gordura"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          meal.reduce((prev, cur) => prev + cur.prot, 0),
          meal.reduce((prev, cur) => prev + cur.carb, 0),
          meal.reduce((prev, cur) => prev + cur.fat, 0),
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
        <p className="font-bold text-lg">Almoço</p>
        <p className="font-bold text-lg">500g</p>
      </div>
      {meal.map((ingredient, i) => (
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
