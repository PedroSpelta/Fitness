import React, { useState } from "react";
import MacroCircle from "./MacroCircle";

function Daily() {
  const [] = useState();
  return (
    <div className="w-[500px] h-[50px] bg-blue-600 ">
      {/* header */}
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Seu dia</p>
      </div>
      {/* body */}
      <div className="bg-red-500 flex justify-between">
        <div >
          <p>Restam:</p>
          <p className="text-4xl">3500</p>
        </div>
        <div className="bg-red-500 flex justify-end">
          <MacroCircle percentage={0.1} absolute={199} />
          <MacroCircle percentage={0.1} absolute={199} />
          <MacroCircle percentage={0.1} absolute={199} />
        </div>
      </div>
    </div>
  );
}

export default Daily;
