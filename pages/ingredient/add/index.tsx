import Link from "next/link";
import React from "react";
import Header from "../../../components/Header";
import IngredientForm from "../../../components/IngredientForm";

function Index() {
  return (
    <div className="flex flex-col items-center bg-[#fafafa] h-screen">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <div className="max-w-3xl flex w-full gap-3 ml-3">
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
      <IngredientForm />
    </div>
  );
}

export default Index;
