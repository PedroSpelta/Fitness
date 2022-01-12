import Link from "next/link";
import React from "react";
import Header from "../../components/Header";
import IngredientCard from "../../components/IngredientCard";
import IngredientForm from "../../components/IngredientForm";
import { useFoodContext } from "../../context/foodContext";

function Index() {
  const { ingredients } = useFoodContext();

  return (
    <div className="flex flex-col items-center bg-[#fafafa] min-h-screen">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <div className="max-w-3xl flex w-full gap-3">
          <Link href={"/ingredient"} passHref>
            <p className="text-white text-lg font-semibold py-3 cursor-pointer">
              Cadastrados
            </p>
          </Link>
          <Link href={"/ingredient/add"} passHref>
            <p className="text-white text-lg font-semibold py-3 cursor-pointer">
              Adicionar
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full items-center">
        {ingredients.map((ingredient, i) => (
          <IngredientCard key={i} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
}

export default Index;
