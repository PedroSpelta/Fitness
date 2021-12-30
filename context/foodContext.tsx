import React, { createContext, useContext, useState, FC } from "react";
import { defaultTodayMeals } from "../libs/constants";
import { IFoodContext, ITodayMeals } from "../libs/interfaces";

const FoodContext = createContext<IFoodContext>(null!);

export const FoodContextWrapper: FC = ({ children }) => {
  console.log(defaultTodayMeals);

  const [todayMeals, setTodayMeals] = useState<ITodayMeals>(defaultTodayMeals);

  return (
    <FoodContext.Provider
      value={{
        todayMeals,
        setTodayMeals,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export function useFoodContext() {
  return useContext(FoodContext);
}
