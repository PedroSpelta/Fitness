import { addDoc, collection, getDocs } from "firebase/firestore";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { defaultTodayMeals } from "../libs/constants";
import { IFoodContext, ITodayMeals } from "../libs/interfaces";
import { db } from "../utils/firebase";

const FoodContext = createContext<IFoodContext>(null!);

export const FoodContextWrapper: FC = ({ children }) => {
  const [todayMeals, setTodayMeals] = useState<ITodayMeals>(defaultTodayMeals);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const ingredientsCol = collection(db, "ingredients");
      const ingredientsDocs = (await getDocs(ingredientsCol)).docs;
      const ingredientsData = ingredientsDocs.map((i) => i.data());
      console.log(ingredientsData);
    };
    // getData();
  }, []);

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
