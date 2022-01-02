import { updateDoc } from "firebase/firestore";
import React from "react";
import { getUserDocsHelper } from "../libs/firebaseHelper";
import { ITodayMeal } from "../libs/interfaces";
import { getTodayDateString } from "../utils/date";

function AddMealButton({ meal }: { meal: ITodayMeal }) {
  const clickHandler = async () => {
    const userDocs = await getUserDocsHelper();
    const userData = userDocs.data();
    const today = getTodayDateString();
    const todayPrevMeals = userData.dates[today] || [];
    const todayData = {
      ...userData,
      dates: { ...userData.dates, [today]: [...todayPrevMeals, meal] },
    };
    console.log(todayData);

    updateDoc(userDocs.ref, todayData);
  };
  return (
    <div
      className="addMealBtn border border-black rounded-md p-0.5 my-2 text-sm bg-white w-fit"
      onClick={clickHandler}
    >
      Adicionar refeição
    </div>
  );
}

export default AddMealButton;
