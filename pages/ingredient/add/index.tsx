import React from "react";
import Header from "../../../components/Header";
import IngredientForm from "../../../components/IngredientForm";

function Index() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full">
          Seu diário
        </p>
      </div>
      <IngredientForm />
    </div>
  );
}

export default Index;
