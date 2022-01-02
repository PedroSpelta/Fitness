import React, { useState } from "react";
import { ITodayMeal } from "../libs/interfaces";
import { borderColor } from "../styles/constants";
import FoodIngredient from "./FoodIngredient";
import FoodIngredientNameInput from "./FoodIngredientNameInput";

const defaultIngredients: ITodayMeal = {
  name: "",
  ingredients: [],
};

function AddMeal() {
  const [meal, setMeal] = useState(defaultIngredients);
  return (
    <div
      className={`w-full border max-w-3xl min-h-[156px] mt-3 p-3 relative`}
      style={{ borderColor: borderColor }}
    >
      <div className="flex justify-between max-w-lg border-b-2 border-black">
        <p className="font-bold text-lg">teste</p>
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
      <FoodIngredientNameInput setMeal={setMeal} />
      <div className="border-t-2 max-w-lg border-black">
        {/* <FoodTotal ingredients={meal.ingredients}/> */}
      </div>
      <div
        className="h-32 w-32 absolute right-5 invisible md:visible"
        style={{
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      >
        {/* <Doughnut data={dougData} options={dougOptions} /> */}
      </div>
    </div>
  );
}

export default AddMeal;
