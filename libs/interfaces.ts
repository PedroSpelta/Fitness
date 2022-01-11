import { DocumentData } from "firebase/firestore";
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
  carbkg: number;
  weight: number;
  height: number;
  sex: string;
  objective: string;
  type: string;
  caloriesGoal: number;
  caloriesBasal: number;
  updateUserInfo: Function;
  protPerDay: number;
  fatPerDay: number;
  carbPerDay: number;
  userDates: IUserDataDates;
  setProtPerDay: Dispatch<number>;
  setFatPerDay: Dispatch<number>;
  setCarbPerDay: Dispatch<number>;
  setCaloriesBasal: Dispatch<number>;
  setCaloriesGoal: Dispatch<number>;
  setType: Dispatch<string>;
  setObjective: Dispatch<string>;
  setAge: Dispatch<number>;
  setCarbkg: Dispatch<number>;
  setFatkg: Dispatch<number>;
  setWeight: Dispatch<number>;
  setProtkg: Dispatch<number>;
  setHeight: Dispatch<number>;
  setSex: Dispatch<string>;
}

export interface IMacrosPerDay {
  carb: string;
  prot: string;
  fat: string;
}

export interface IIngredient {
  name: string;
  carb: number;
  prot: number;
  fat: number;
  quantity: number;
}

export interface IIngredientMacroFirebase {
  carb: number;
  fat: number;
  fiber: number;
  prot: number;
  sodium: number;
}

interface IIngredientsFirebaseKeys {
  [key:string] :any;
}

export interface IIngredientFirebase extends IIngredientsFirebaseKeys {
  macros: IIngredientMacroFirebase;
  name: string;
  portion_size: number;
  upVoted: Array<string>;
  downVoted: Array<string>;
}

export interface IIngredientsFirebase extends Array<IIngredientFirebase> {}

export interface IFoodContext {
  todayMeals: ITodayMeals;
  ingredients: IIngredientsFirebase;
  setTodayMeals: Dispatch<ITodayMeals>;
  setIngredients: Dispatch<IIngredientsFirebase>;
}

export interface ITodayMeal {
  name: string;
  ingredients: Array<IIngredient>;
}

export interface ITodayMeals extends Array<ITodayMeal> {}

export interface IPersonalData {
  age: number;
  protkg: number;
  fatkg: number;
  carbkg: number;
  weight: number;
  height: number;
  objective: string;
  sex: string;
  type: string;
  calories_basal: number;
  calories_goal: number;
  prot_goal: number;
  carb_goal: number;
  fat_goal: number;
}

export interface IUserDataDate {
  name: string;
  ingredients: Array<IIngredient>;
}

export interface IUserDataDates {
  [key: string]: Array<IUserDataDate>;
}

export interface IUserData {
  dates: IUserDataDates;
  id: number;
  personal_info: IPersonalData;
}

export interface INewVotes {
  [key: string ] : Array<string>;
}