import React from "react";
import { usePersonalDataContext } from "../context/personalData";

function DietResult() {
  const { age, height, weight, protkg, fatkg} = usePersonalDataContext();
  return (
    <div className="col-span-2">
      <p className="text-xl">Resultado</p>
      <p>Proteina/dia (g)</p>
      <div className="pl-1 py-1 bg-gray-200 border rounded-md w-40">
        {protkg * weight / 100} g
      </div>
      <p>Gordura/dia (g)</p>
      <div className="pl-1 py-1 bg-gray-200 border rounded-md w-40">
        {fatkg * weight / 100} g
      </div>
      <p>Carbo/dia (g)</p>
      <div className="pl-1 py-1 bg-gray-200 border rounded-md w-40">
        {145} g
      </div>
    </div>
  );
}

export default DietResult;
