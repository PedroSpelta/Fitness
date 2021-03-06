import React from "react";

interface IIngredient {
  name: string;
  carb: number;
  prot: number;
  fat: number;
  quantity: number;
}

function FoodIngredient({ ingredient }: { ingredient: IIngredient }) {
  const cal = (ingredient.carb + ingredient.prot) * 4 + ingredient.fat * 9;
  return (
    <div className="flex border-t-2 justify-between max-w-lg items-center">
      <p>{ingredient.name}</p>
      <div className="flex text-center w-fit">
        <p className="w-12 hidden md:inline">{ingredient.carb} g</p>
        <p className="w-12 hidden md:inline">{ingredient.prot} g</p>
        <p className="w-12 hidden md:inline">{ingredient.fat} g</p>
        <p className="w-12">{cal}</p>
        <p className="ml-5 w-14 ">{ingredient.quantity} g</p>
      </div>
    </div>
  );
}

export default FoodIngredient;
