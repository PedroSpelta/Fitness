import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { defaultBodyData } from "../libs/constants";
import { IBodyData, IDataContext } from "../libs/interfaces";



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
  const [calories, setCalories] = useState(0);

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
