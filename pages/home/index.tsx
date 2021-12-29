import type { NextPage } from "next";
import React from "react";
import Daily from "../../components/Daily";
import FoodDaily from "../../components/FoodDaily";
import Header from "../../components/Header";

const index: NextPage = () => {
  return <div className="flex flex-col justify-center items-center">
    <Header />
    <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full">
          Seu diário
        </p>
      </div>
		<Daily />
    <FoodDaily />
  </div>;
};

export default index;
