import type { NextPage } from "next";
import React, { useState } from "react";
import DietForm from "../../components/DietForm";
import DietResult from "../../components/DietResult";
import Header from "../../components/Header";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full">
          Preencha com seus dados abaixo
        </p>
      </div>
      <div className="grid-cols-3 max-w-3xl w-full grid">
        <DietForm />
        <DietResult />
      </div>
    </div>
  );
};

export default Index;
