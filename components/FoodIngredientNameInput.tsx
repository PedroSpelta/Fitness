import React, { Dispatch, HtmlHTMLAttributes, useState } from "react";
import { useFoodContext } from "../context/foodContext";
import { IIngredientFirebase, ITodayMeal } from "../libs/interfaces";

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

function FoodIngredientNameInput({
  setMeal,
}: {
  setMeal: (
    value: ITodayMeal | ((prevValue: ITodayMeal) => ITodayMeal)
  ) => void;
}) {
  const { ingredients } = useFoodContext();
  const [selectedIngredient, setSelectedIngredient] =
    useState<IIngredientFirebase>(defaultIngredient);
  const [weight, setWeight] = useState(100);

  //the displaying macro nutrients
  const carb: number =
    Number(
      (
        (selectedIngredient.macros.carb * weight) /
        selectedIngredient.portion_size
      ).toFixed(0)
    ) || 0;
  const prot =
    Number(
      (
        (selectedIngredient.macros.prot * weight) /
        selectedIngredient.portion_size
      ).toFixed(0)
    ) || 0;
  const fat =
    Number(
      (
        (selectedIngredient.macros.fat * weight) /
        selectedIngredient.portion_size
      ).toFixed(0)
    ) || 0;
  const cal = (carb + prot) * 4 + fat * 9;

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //type of textarea, so we can get the .value on ts
    const target = e.target as HTMLTextAreaElement;
    const ingredient = ingredients.filter((i) => i.name === target.value)[0];
    //test if ingredient exists
    if (!ingredient) return;
    setSelectedIngredient(ingredient);
  };

  const addMealHandler = () => {
    const t = {
      name: "",
      ingredients: [
        {
          name: "arroz",
          carb: 1,
          prot: 2,
          fat: 3,
          quantity: 50,
        },
      ],
    };
    setMeal((prev: ITodayMeal) => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        { carb, prot, fat, quantity: weight, name: selectedIngredient.name },
      ],
    }));
  };

  return (
    <div>
      <div className="flex border-t-2 justify-between max-w-lg items-center relative bg-gray-200 font-semibol">
        <div className="w-full">
          <input
            type="text"
            className=" pl-2 p-1 w-[90%] rounded-md text-sm font-semibold bg-gray-200"
            list="ingredients-list"
            placeholder="Ingrediente"
            onInput={(e) => inputHandler(e)}
          />
        </div>
        <datalist id="ingredients-list">
          {ingredients.map((i, index: number) => (
            <option value={i.name} key={index} />
          ))}
        </datalist>
        <div className="flex text-center">
          <p className="w-12 hidden md:inline">{carb} g</p>
          <p className="w-12 hidden md:inline">{prot} g</p>
          <p className="w-12 hidden md:inline">{fat} g</p>
          <p className="w-12">{cal}</p>
          <div className="relative">
            <input
              type="number"
              className="ml-5 w-14 rounded-md pl-2 p-1 text-sm font-semibold bg-gray-200"
              value={Number(weight).toString()}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
            <p className="right-2 top-0.5 absolute z-10">g</p>
          </div>
        </div>
        <button
          onClick={addMealHandler}
          className="absolute -right-[23px] md:-right-20 addMealBtn border rounded-md px-1 py-0 md:py-1 my-2 text-sm text-white bg-blue-500"
        >
          <p className="hidden md:inline">Adicionar</p>
          <p className=" md:hidden">+</p>

        </button>
      </div>
    </div>
  );
}

export default FoodIngredientNameInput;
