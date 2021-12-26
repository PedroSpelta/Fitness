import type { NextPage } from "next";
import React from "react";
import Daily from "../../components/Daily";
import Header from "../../components/Header";
import MacroCircle from "../../components/MacroCircle";

const index: NextPage = () => {
  return <div className="flex flex-col justify-center items-center">
    <Header />
		<Daily />
  </div>;
};

export default index;