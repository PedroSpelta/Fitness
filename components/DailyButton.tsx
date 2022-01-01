import Link from "next/link";
import React from "react";

function DailyButton() {
  return (
    <div className="col-span-3 gap-3 flex">
      <div className=" border rounded-lg border-gray-600 text-center text-gray-600 p-1.5 addMealBtn cursor-pointer">
        Adicionar refeição
      </div>
      <Link href={"/ingredient/add"} passHref>
        <div className="border rounded-lg border-gray-600 text-center text-gray-600 p-1.5 addMealBtn cursor-pointer">
          Adicionar ingrediente
        </div>
      </Link>
    </div>
  );
}

export default DailyButton;
