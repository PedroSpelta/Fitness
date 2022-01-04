import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { defaultBodyData } from "../libs/constants";
import { getUserDocsHelper } from "../libs/firebaseHelper";
import { IDataContext } from "../libs/interfaces";
import { getTodayDateString } from "../utils/date";
import { db } from "../utils/firebase";
import { useFoodContext } from "./foodContext";

const dic: { [char: string]: number } = {
  ecto: 1.2,
  endo: 1,
  meso: 1.1,
  gain: 1.15,
  mantain: 1,
  lose: 0.85,
};

const DataContext = createContext<IDataContext>(null!);

export const DataWrapper: FC = ({ children }) => {
  // if (local) return;
  const [protkg, setProtkg] = useState(defaultBodyData.protkg);
  const [fatkg, setFatkg] = useState(defaultBodyData.fatkg);
  const [carbkg, setCarbkg] = useState(defaultBodyData.carbkg);
  const [age, setAge] = useState(defaultBodyData.age);
  const [height, setHeight] = useState(defaultBodyData.height);
  const [weight, setWeight] = useState(defaultBodyData.weight);
  const [sex, setSex] = useState(defaultBodyData.sex);
  const [objective, setObjective] = useState(defaultBodyData.objective);
  const [type, setType] = useState(defaultBodyData.type);
  const [basal, setBasal] = useState(0);
  const [calories, setCalories] = useState(0);
  const [macrosPerDay, setMacrosPerDay] = useState({
    prot: "0",
    fat: "0",
    carb: "0",
  });
  const { setTodayMeals } = useFoodContext();

  useEffect(() => {
    const getUserData = async () => {
      const userDoc = await getUserDocsHelper();
      const userData = userDoc.data().personal_info;
      const dateString = getTodayDateString();
      const macrosPerdayData = {
        prot: ((protkg * weight) / 100).toFixed(0),
        fat: ((fatkg * weight) / 100).toFixed(0),
        carb: ((carbkg * weight) / 100).toFixed(0),
      };

      setProtkg(userData.protkg);
      setFatkg(userData.fatkg);
      setCarbkg(userData.carbkg);
      setAge(userData.age);
      setHeight(userData.height);
      setWeight(userData.weight);
      setSex(userData.sex);
      setObjective(userData.objective);
      setType(userData.type);
      setMacrosPerDay(macrosPerdayData);

      const q = query(collection(db, "users"), where("id", "==", 1));

      const unsubscribe = onSnapshot(q, (doc) => {
        setTodayMeals(doc.docs[0].data().dates[dateString] || []);
      });

      // query(userDoc)
    };
    getUserData();
  }, []);

  useEffect(() => {
    const basalA: number =
      (sex === "male"
        ? Number((66.5 + 13.75 * weight + 5.03 * height - 6.8 * age).toFixed(0))
        : Number(
            (665.1 + 9.56 * weight + 1.8 * height - 4.7 * age).toFixed(0)
          )) * dic[type];
    setBasal(basalA);
  }, [weight, height, age, sex, type]);

  useEffect(() => {
    if (objective === "mantain") return setCalories(Number(basal.toFixed(0)));
    else if (objective === "gain")
      return setCalories(Number((basal * 1.15).toFixed(0)));
    setCalories(Number((basal * 0.85).toFixed(0)));
  }, [objective, basal, setCalories]);

  const updateUserInfo = async () => {
    const data = {
      age,
      sex,
      type,
      fatkg,
      height,
      weight,
      protkg,
      carbkg,
      objective,
      calories_goal: calories,
      fat_goal: fatkg * weight,
      prot_goal: protkg * weight,
      carb_goal: carbkg * weight,
    };

    const userDoc = await getUserDocsHelper();
    const userRef = userDoc.ref;
    updateDoc(userRef, { personal_info: data });
  };

  return (
    <DataContext.Provider
      value={{
        protkg,
        fatkg,
        age,
        weight,
        height,
        sex,
        objective,
        type,
        calories,
        macrosPerDay,
        basal,
        carbkg,
        setCarbkg,
        updateUserInfo,
        setMacrosPerDay,
        setCalories,
        setType,
        setObjective,
        setSex,
        setProtkg,
        setFatkg,
        setAge,
        setWeight,
        setHeight,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function usePersonalDataContext() {
  return useContext(DataContext);
}
