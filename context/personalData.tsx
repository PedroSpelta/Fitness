import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { defaultUserData } from "../libs/constants";
import { getUserDocsHelper } from "../libs/firebaseHelper";
import { IDataContext, IUserData } from "../libs/interfaces";
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
  const { data } = useSession();
  const [sex, setSex] = useState(defaultUserData.sex);
  const [height, setHeight] = useState(defaultUserData.height);
  const [weight, setWeight] = useState(defaultUserData.weight);
  const [type, setType] = useState(defaultUserData.type);
  const [age, setAge] = useState(defaultUserData.age);
  const [objective, setObjective] = useState(defaultUserData.objective);
  const [caloriesBasal, setCaloriesBasal] = useState(0);
  const [caloriesGoal, setCaloriesGoal] = useState(0);
  const [protkg, setProtkg] = useState(defaultUserData.protkg);
  const [fatkg, setFatkg] = useState(defaultUserData.fatkg);
  const [carbkg, setCarbkg] = useState(defaultUserData.carbkg);
  const [protPerDay, setProtPerDay] = useState(0);
  const [fatPerDay, setFatPerDay] = useState(0);
  const [carbPerDay, setCarbPerDay] = useState(0);
  const [userDates, setUserDates] = useState({
    "01/01/2022": [
      {
        ingredients: [
          {
            carb: 0,
            fat: 0,
            name: "chicken",
            prot: 30,
            quantity: 100,
          },
        ],
        name: "almoço",
      },
    ],
  });

  const { setTodayMeals } = useFoodContext();

  useEffect(() => {
    const getUserData = async () => {
      if (!data) return;
      const userDoc = await getUserDocsHelper(data?.user?.email as string);
      const q = query(
        collection(db, "users"),
        where("email", "==", data.user?.email)
      );

      if ((await getDocs(q)).docs.length === 0) {
        const usersColl = collection(db, "users");
        await addDoc(usersColl, {
          email: data.user?.email,
          dates: {},
          personal_info: {},
        });
      }

      if (!userDoc) return;
      
      const userData = userDoc.data().personal_info;
      if (!userData.prot_goal) return;
      const dateString = getTodayDateString();

      setProtPerDay(Number(userData.prot_goal.toFixed(0)));
      setFatPerDay(Number(userData.fat_goal.toFixed(0)));
      setCarbPerDay(Number(userData.carb_goal.toFixed(0)));

      setProtkg(userData.protkg);
      setFatkg(userData.fatkg);
      setCarbkg(userData.carbkg);
      setAge(userData.age);
      setHeight(userData.height);
      setWeight(userData.weight);
      setSex(userData.sex);
      setObjective(userData.objective);
      setType(userData.type);

      const unsubscribe = onSnapshot(q, (doc) => {
        setUserDates(doc.docs[0].data().dates);
        setTodayMeals(doc.docs[0].data().dates[dateString] || []);
      });
    };
    getUserData();
  }, [setTodayMeals, data]);

  useEffect(() => {
    const basalA: number =
      (sex === "male"
        ? Number((66.5 + 13.75 * weight + 5.03 * height - 6.8 * age).toFixed(0))
        : Number(
            (665.1 + 9.56 * weight + 1.8 * height - 4.7 * age).toFixed(0)
          )) * dic[type];
    setCaloriesBasal(basalA);
  }, [weight, height, age, sex, type]);

  useEffect(() => {
    setCarbkg((caloriesGoal / weight - (fatkg * 9 + protkg * 4)) / 4);
  }, [fatkg, protkg, setCarbkg, weight, caloriesGoal]);

  useEffect(() => {
    if (objective === "mantain")
      return setCaloriesGoal(Number(caloriesBasal.toFixed(0)));
    else if (objective === "gain")
      return setCaloriesGoal(Number((caloriesBasal * 1.15).toFixed(0)));
    setCaloriesGoal(Number((caloriesBasal * 0.85).toFixed(0)));
  }, [objective, caloriesBasal, setCaloriesGoal]);

  const updateUserInfo = async () => {
    const personalData = {
      age,
      sex,
      type,
      fatkg,
      height,
      weight,
      protkg,
      carbkg,
      objective,
      calories_goal: caloriesGoal,
      fat_goal: fatkg * weight,
      prot_goal: protkg * weight,
      carb_goal: carbkg * weight,
    };

    const userDoc = await getUserDocsHelper(data?.user?.email as string);
    if (!userDoc) return;
    const userRef = userDoc.ref;
    updateDoc(userRef, { personal_info: personalData });
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
        caloriesGoal,
        caloriesBasal,
        carbkg,
        protPerDay,
        fatPerDay,
        carbPerDay,
        userDates,
        setProtPerDay,
        setFatPerDay,
        setCarbPerDay,
        setCarbkg,
        updateUserInfo,
        setCaloriesBasal,
        setCaloriesGoal,
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
