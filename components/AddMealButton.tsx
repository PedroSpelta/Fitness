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
      className="addMealBtn rounded-md my-2 text-sm bg-blue-500 text-white p-1 w-fit cursor-pointer"
      onClick={clickHandler}
    >
      Adicionar refeição
    </div>
  );
}

export default AddMealButton;
