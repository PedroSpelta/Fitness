import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { ITodayMeal } from '../libs/interfaces';

function AddMealDoug({meal} : {meal:ITodayMeal}) {
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
        className="h-32 w-32 absolute right-5 invisible md:visible"
        style={{
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      >
        <Doughnut data={dougData} options={dougOptions} />
      </div>
  )
}

export default AddMealDoug
