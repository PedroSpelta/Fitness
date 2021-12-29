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
    <div className="flex mr-10 border-t-2 justify-between max-w-lg items-center">
      <p>{ingredient.name}</p>
      <p>{ingredient.quantity}g</p>
    </div>
  );
}

export default FoodIngredient;
