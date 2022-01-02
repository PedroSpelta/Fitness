import {
  addDoc,
  collection,
  DocumentData,
  getDoc,
  getDocs,
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
      const ingredientsDocs = (await getDocs(ingredientsCol)).docs;
      const ingredientsData = ingredientsDocs.map((i) => i.data()) as IIngredientsFirebase;
      console.log(ingredientsDocs.map((i) => i.data()));
      console.log(ingredientsData);
      
      
      setIngredients(ingredientsData);
      
      // setIngredients(ingredientsData)
    };

    const testUser = async () => {
      const userId = 1;

      const userQuery = query(
        collection(db, "users"),
        where("id", "==", userId)
      );
      const userDocs = (await getDocs(userQuery)).docs;

      const userDataColl = collection(db, "users", userDocs[0].id, "data");
      const userDataDocs = (await getDocs(userDataColl)).docs;
      const userData = userDataDocs.map((d) => d.data());
      console.log(userData);
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
