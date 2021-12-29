import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { defaultBodyData } from "../libs/constants";
import { IBodyData, IDataContext } from "../libs/interfaces";



const FoodContext = createContext(null!);

export const FoodContextWrapper: FC = ({ children }) => {
   
  return (
    <FoodContext.Provider
      value={{}}
    >
      {children}
    </FoodContext.Provider>
  );
};

export function useFoodContext() {
  return useContext(FoodContext);
}
