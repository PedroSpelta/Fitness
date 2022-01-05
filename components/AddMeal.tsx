import React, { useState } from "react";
import { ITodayMeal } from "../libs/interfaces";
import { borderColor } from "../styles/constants";
import AddMealButton from "./AddMealButton";
import AddMealDoug from "./AddMealDoug";
import FoodIngredient from "./FoodIngredient";
import FoodIngredientNameInput from "./FoodIngredientNameInput";
import FoodTotal from "./FoodTotal";

const defaultMeal: ITodayMeal = {
  name: "",
  ingredients: [],
};

function AddMeal() {
  const [meal, setMeal] = useState(defaultMeal);
  return (
    <div
      className={`w-[80%] md:w-full max-w-3xl min-h-[156px] mt-3 p-3 relative bg-white shadow-lg rounded-md`}
      style={{ borderColor: borderColor }}
    >
      <div className="flex justify-between max-w-lg border-b-2 border-black">
        <div className="w-full">
          <input
            className="font-bold text-sm p-1 boxShadow w-[90%] mb-1 rounded-md"
            value={meal.name}
            onChange={(e) =>
              setMeal((state) => ({ ...state, name: e.target.value }))
            }
            type="text"
            placeholder="Título"
          />
        </div>
        <div className="text-center font-bold h-8 leading-8 hidden md:flex">
          <p className="w-12 h-full">Carb.</p>
          <p className="w-12 h-full ">Prot.</p>
          <p className="w-12 h-full ">Gord.</p>
          <p className="w-14 h-full  ml-5">Peso</p>
        </div>
        <div className="text-center font-bold h-8 leading-8 flex md:hidden text-sm">
          <p className="w-7 h-full">C.</p>
          <p className="w-7 h-full ">P.</p>
          <p className="w-7 h-full ">G.</p>
          <p className="w-8 h-full  ml-5">P</p>
        </div>
      </div>
      {meal.ingredients.map((ingredient, i) => (
        <FoodIngredient key={i} ingredient={ingredient} />
      ))}
      <FoodIngredientNameInput setMeal={setMeal} />
      <FoodTotal ingredients={meal.ingredients} />
      <AddMealButton meal={meal} />
      <AddMealDoug meal={meal} />
    </div>
  );
}

export default AddMeal;
