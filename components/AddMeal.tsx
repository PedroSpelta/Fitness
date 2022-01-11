import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
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

function AddMeal({ closeHandler }: { closeHandler: Function }) {
  const [meal, setMeal] = useState(defaultMeal);
  return (
    <div
      className={`w-[80%] md:w-full max-w-3xl min-h-[156px] mt-3 py-3 pr-6 pl-3 md:px-3 relative bg-white shadow-lg rounded-md`}
      style={{ borderColor: borderColor }}
    >
      <div className="flex justify-between max-w-lg ">
        <div className="w-full">
          <input
            className="font-bold text-sm p-1 w-[90%] mb-1 rounded-md"
            value={meal.name}
            onChange={(e) =>
              setMeal((state) => ({ ...state, name: e.target.value }))
            }
            type="text"
            placeholder="Título"
          />
        </div>
        <div className="text-center font-bold h-8 leading-8 flex w-fit text-sm">
          <p className="w-12 h-full hidden md:inline">Carb.</p>
          <p className="w-12 h-full hidden md:inline">Prot.</p>
          <p className="w-12 h-full hidden md:inline">Gord.</p>
          <p className="w-12 h-full ">kcal</p>
          <p className="w-14 h-full  ml-5">Peso</p>
        </div>
      </div>
      {meal.ingredients.map((ingredient, i) => (
        <FoodIngredient key={i} ingredient={ingredient} />
      ))}
      <FoodIngredientNameInput setMeal={setMeal} />
      <FoodTotal ingredients={meal.ingredients} />
      <AddMealButton meal={meal} />
      <AddMealDoug meal={meal} />
      <div
        className="absolute right-0.5 top-2 md:right-2 hover:text-red-500 rounded-md w-5 h-5 flex justify-center items-center font-semibold cursor-pointer"
        onClick={() => closeHandler()}
      >
        <AiOutlineClose />
      </div>
    </div>
  );
}

export default AddMeal;
