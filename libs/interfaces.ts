import { Dispatch } from "react";

export interface IBodyData {
  weight: number;
  height: number;
  protkg: number;
  fatkg: number;
  sex: string;
  objective: string;
  type: string;
  age: number;
}

export interface IDataContext {
  age: number;
  protkg: number;
  fatkg: number;
  weight: number;
  height: number;
  sex: string;
  objective: string;
  type: string;
  calories: number;
  macrosPerDay: IMacrosPerDay;
  basal: number;
  setMacrosPerDay: Dispatch<IMacrosPerDay>;
  setCalories: Dispatch<number>;
  setType: Dispatch<string>;
  setObjective: Dispatch<string>;
  setAge: Dispatch<number>;
  setFatkg: Dispatch<number>;
  setWeight: Dispatch<number>;
  setProtkg: Dispatch<number>;
  setHeight: Dispatch<number>;
  setSex: Dispatch<string>;
}

export interface IMacrosPerDay {
  carbo: number;
  prot: number;
  fat: number;
}

export interface IIngredient {
  name: string;
  carb: number;
  prot: number;
  fat: number;
  quantity: number;
}

export interface IFoodContext {
  todayMeals: ITodayMeals;
  setTodayMeals: Dispatch<ITodayMeals>;
}

export interface ITodayMeal {
  name: string;
  ingredients: Array<IIngredient>;
}

export interface ITodayMeals extends Array<ITodayMeal> {}
