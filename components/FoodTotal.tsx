import React, { useEffect, useState } from "react";
import { IIngredient } from "../libs/interfaces";

function FoodTotal({ ingredients }: { ingredients: Array<IIngredient> }) {
  const [mealMacros, setMealMacros] = useState({
    carb: 0,
    fat: 0,
    prot: 0,
    quantity: 0,
    calories: 0,
  });
  useEffect(() => {
    if (!ingredients) return;
    let carb = 0;
    let fat = 0;
    let prot = 0;
    let quantity = 0;
    let calories = 0;
    for (let i = 0; i < ingredients.length; i += 1) {
      carb += ingredients[i].carb;
      fat += ingredients[i].fat;
      prot += ingredients[i].prot;
      quantity += ingredients[i].quantity;
    }
    calories = (carb + prot) * 4 + fat* 9;
    setMealMacros({ carb, fat, prot, quantity, calories });
  }, [ingredients]);
  return (
    <div className="border-t-2 max-w-lg border-black mt-auto">
      <div className="flex justify-between">
        <p>Total</p>
        <div className="flex text-center font-bold w-fit">
          <p className="w-12 hidden md:inline">{mealMacros.carb} g</p>
          <p className="w-12 hidden md:inline">{mealMacros.prot} g</p>
          <p className="w-12 hidden md:inline">{mealMacros.fat} g</p>
          <p className="w-12 font-bold">{mealMacros.calories}</p>
          <p className="w-14 ml-5 font-bold">{mealMacros.quantity} g</p>
        </div>
      </div>
    </div>
  );
}

export default FoodTotal;
