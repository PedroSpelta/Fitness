import React from "react";
import { IIngredientMacroFirebase } from "../libs/interfaces";

interface IIngredientCardFacts {
  portion: number;
  macros: IIngredientMacroFirebase;
}

function IngredientCardFacts({ portion, macros }: IIngredientCardFacts) {
  const calories = (macros.carb + macros.prot) * 4 + macros.fat * 9;
  return (
    <div className="md:mr-40 mr-4 text-sm md:text-base w-full">
      <div className="flex font-semibold text-center mb-2 w-full justify-end">
        <p className="w-14">Porção</p>
        <p className="w-14 hidden md:inline">Carbos</p>
        <p className="w-14 hidden md:inline">Prots</p>
        <p className="w-14 hidden md:inline">Gords</p>
        <p className="w-14">kcal</p>
      </div>
      <div className="flex text-center mb-2 w-full justify-end">
        <p className="w-14">{portion}g</p>
        <p className="w-14 hidden md:inline">{macros.carb}g</p>
        <p className="w-14 hidden md:inline">{macros.prot}g</p>
        <p className="w-14 hidden md:inline">{macros.fat}g</p>
        <p className="w-14">{calories}</p>
      </div>
    </div>
  );
}

export default IngredientCardFacts;
