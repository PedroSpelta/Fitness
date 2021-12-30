import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { defaultBodyData } from "../libs/constants";
import { IBodyData, IDataContext } from "../libs/interfaces";

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
  const [age, setAge] = useState(defaultBodyData.age);
  const [height, setHeight] = useState(defaultBodyData.height);
  const [weight, setWeight] = useState(defaultBodyData.weight);
  const [sex, setSex] = useState(defaultBodyData.sex);
  const [objective, setObjective] = useState(defaultBodyData.objective);
  const [type, setType] = useState(defaultBodyData.type);
  const [basal, setBasal] = useState(0);
  const [calories, setCalories] = useState(0);
  const [macrosPerDay, setMacrosPerDay] = useState({
    prot: 0,
    fat: 0,
    carbo: 0,
  });

  useEffect(() => {
    const localPersonalDataString = localStorage.getItem("personalData");
    if (!localPersonalDataString) return;
    const localPersonalData: IBodyData = JSON.parse(
      localPersonalDataString || "{}"
    );
    setProtkg(localPersonalData.protkg);
    setFatkg(localPersonalData.fatkg);
    setAge(localPersonalData.age);
    setHeight(localPersonalData.height);
    setWeight(localPersonalData.weight);
    setSex(localPersonalData.sex);
    setObjective(localPersonalData.objective);
    setType(localPersonalData.type);
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
