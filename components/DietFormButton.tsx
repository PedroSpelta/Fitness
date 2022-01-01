import React from "react";
import { usePersonalDataContext } from "../context/personalData";
import { buttonDefaultStyle } from "../styles/constants";

function DietFormButton() {
  const { updateUserInfo } = usePersonalDataContext();
  return (
    <div className="flex justify-center my-10">
      <button className={buttonDefaultStyle} onClick={() => updateUserInfo()}>
        Modificar informações
      </button>
    </div>
  );
}

export default DietFormButton;
