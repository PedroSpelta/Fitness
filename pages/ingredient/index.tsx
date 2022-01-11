import React from "react";
import Header from "../../components/Header";
import IngredientCard from "../../components/IngredientCard";
import IngredientForm from "../../components/IngredientForm";
import { useFoodContext } from "../../context/foodContext";

function Index() {
  const { ingredients } = useFoodContext();

  return (
    <div className="flex flex-col items-center bg-[#fafafa] h-screen">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full">
          Ingredientes cadastrados
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full items-center">
      {ingredients.map((ingredient, i) => (
        <IngredientCard key={i} ingredient={ingredient}/>
      ))}

      </div>
    </div>
  );
}

export default Index;
