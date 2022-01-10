import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { defaultTodayMeals } from "../libs/constants";
import { IFoodContext, IIngredientsFirebase, ITodayMeals } from "../libs/interfaces";
import { db } from "../utils/firebase";

const FoodContext = createContext<IFoodContext>(null!);

export const FoodContextWrapper: FC = ({ children }) => {
  const [todayMeals, setTodayMeals] = useState<ITodayMeals>(defaultTodayMeals);
  const [ingredients, setIngredients] = useState<IIngredientsFirebase>([]);

  useEffect(() => {
    const getIngredients = async () => {
      const ingredientsCol = collection(db, "ingredients");
      // const ingredientsData = ingredientsDocs.map((i) => i.data()) as IIngredientsFirebase;
      const unsubscribe = onSnapshot(ingredientsCol, (doc) => {
        const ingredientsData = doc.docs.map((i) => i.data()) as IIngredientsFirebase;
        setIngredients(ingredientsData)
        // console.log(doc.docs);
        
        // setIngredients(ingredientsData);
      })
      // setIngredients(ingredientsData)
    };
    getIngredients();
    // getData();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        todayMeals,
        ingredients,
        setIngredients,
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
