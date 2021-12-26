import type { NextPage } from "next";
import React from "react";
import Daily from "../../components/Daily";
import DietForm from "../../components/DietForm";
import Header from "../../components/Header";

const index: NextPage = () => {
  return <div className="flex flex-col justify-center items-center">
    <Header />
    <DietForm />
  </div>;
};

export default index;
