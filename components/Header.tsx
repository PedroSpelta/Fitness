import React from "react";
import { containerWidth } from "../libs/containers";

function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`text-blue-700 text-2xl font-black my-5`}
        style={{ width: containerWidth }}

      >
        Spelta
      </div>
      <div className="w-full flex justify-center bg-blue-700">
        <div
          className={`bg-blue-700 text-white font-semibold flex`}
          style={{ width: containerWidth }}
        >
          <p className="hover:bg-blue-900 p-3">Home</p>
          <p className="hover:bg-blue-900 p-3">Food</p>
          <p className="hover:bg-blue-900 p-3">Data</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
