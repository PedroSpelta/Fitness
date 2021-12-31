import React from "react";

interface IIngredient {
  name: string;
  carb: number;
  prot: number;
  fat: number;
  quantity: number;
}

function FoodIngredient({ ingredient }: { ingredient: IIngredient }) {
  return (
    <div className="flex border-t-2 justify-between max-w-lg items-center">
      <p>{ingredient.name}</p>
      <div className="flex text-center">
        <p className="w-12 bg-gray-300">{ingredient.carb} g</p>
        <p className="w-12">{ingredient.prot} g</p>
        <p className="w-12 bg-gray-300">{ingredient.fat} g</p>
        <p className="ml-5 w-14 ">{ingredient.quantity} g</p>
      </div>
    </div>
  );
}

export default FoodIngredient;
