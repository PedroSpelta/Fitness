import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header";

function Index() {
  const route = useRouter();
  console.log(route.query.ingredient);

  return (
    <div>
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full">
          Seu diário
        </p>
      </div>
    </div>
  );
}

export default Index;
