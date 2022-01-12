import type { NextPage } from "next";
import React, { useState } from "react";
import DietForm from "../../components/DietForm";
import DietFormButton from "../../components/DietFormButton";
import DietResult from "../../components/DietResult";
import Header from "../../components/Header";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-[#fafafa] min-h-screen">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full ml-3 md:ml-0">
          Preencha com seus dados abaixo
        </p>
      </div>
      <div className="max-w-3xl w-full my-10 shadow-md rounded-md bg-white">
        <p className="text-2xl text-center font-bold mt-10">
          Recomendações de Dieta
        </p>
        <div className="flex flex-wrap justify-evenly">
          <DietForm />
          <DietResult />
        </div>
        <DietFormButton />
      </div>
    </div>
  );
};

export default Index;
