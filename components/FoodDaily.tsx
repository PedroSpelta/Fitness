import React from "react";
import FoodIngredient from "./FoodIngredient";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ITodayMeal } from "../libs/interfaces";
import FoodTotal from "./FoodTotal";
import { AiOutlineClose } from "react-icons/ai";
import { getUserDocsHelper } from "../libs/firebaseHelper";
import { getTodayDateString } from "../utils/date";
import { updateDoc } from "firebase/firestore";

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

function FoodDaily({ meal, position }: { meal: ITodayMeal, position:number }) {
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

  const removeMeal = async () => {
    const userDocs = await getUserDocsHelper();
    const userData = userDocs.data();
    const today = getTodayDateString();
    const todayPrevMeals = userData.dates[today];
        
    const todayData = {
      ...userData,
      dates: { ...userData.dates, [today]: [...todayPrevMeals] },
    };
    updateDoc(userDocs.ref, todayData);
  }

  return (
    <div
      className={`w-[80%] md:w-full max-w-3xl min-h-[156px] mt-3 p-3 relative shadow-md rounded-md bg-white flex flex-col `}
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
      <div
        className="h-5 w-5 flex justify-center items-center rounded-md absolute right-2 top-2 hover:text-red-600"
        onClick={() => removeMeal()}
      >
        <AiOutlineClose />
      </div>
    </div>
  );
}

export default FoodDaily;
