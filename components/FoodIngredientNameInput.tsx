import React, { HtmlHTMLAttributes, useState } from "react";
import { useFoodContext } from "../context/foodContext";
import { IIngredientFirebase } from "../libs/interfaces";

interface IIngredient {
  name: string;
  carb: number;
  prot: number;
  fat: number;
  quantity: number;
}

const defaultIngredient: IIngredientFirebase = {
  macros: {
    fiber: 0,
    carb: 0,
    prot: 0,
    sodium: 0,
    fat: 0,
  },
  name: "",
  portion_size: 1,
};

function FoodIngredientNameInput() {
  const { ingredients } = useFoodContext();
  const [selectedIngredient, setSelectedIngredient] =
    useState<IIngredientFirebase>(defaultIngredient);
  const [weight, setWeight] = useState(100);

  //the displaying macro nutrients
  const carb =
    (
      (selectedIngredient.macros.carb * weight) /
      selectedIngredient.portion_size
    ).toFixed(0) || 0;
  const prot =
    (
      (selectedIngredient.macros.prot * weight) /
      selectedIngredient.portion_size
    ).toFixed(0) || 0;
  const fat =
    (
      (selectedIngredient.macros.fat * weight) /
      selectedIngredient.portion_size
    ).toFixed(0) || 0;

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //type of textarea, so we can get the .value on ts
    const target = e.target as HTMLTextAreaElement;
    const ingredient = ingredients.filter((i) => i.name === target.value)[0];
    //test if ingredient exists
    if (!ingredient) return;
    setSelectedIngredient(ingredient);
  };

  return (
    <div className="flex border-t-2 justify-between max-w-lg items-center">
      <input
        type="text"
        className=" border-2 rounded-md pl-2 border-black"
        list="ingredients-list"
        onInput={(e) => inputHandler(e)}
      />
      <datalist id="ingredients-list">
        {ingredients.map((i, index: number) => (
          <option value={i.name} key={index} />
        ))}
      </datalist>
      <div className="flex text-center">
        <p className="w-12 bg-gray-300">{carb} g</p>
        <p className="w-12">{prot} g</p>
        <p className="w-12 bg-gray-300">{fat} g</p>
        <div className="relative">
          <input
            type="number"
            className="ml-5 w-14 border-2 rounded-md pl-2 border-black"
            value={Number(weight.toString())}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <p className="right-2 top-0.5 absolute z-10">g</p>
        </div>
      </div>
    </div>
  );
}

export default FoodIngredientNameInput;
