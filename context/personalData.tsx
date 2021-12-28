import React, {
  createContext,
  useContext,
  useState,
  FC,
  Dispatch,
} from "react";

interface IDataContext {
  age: number;
  protkg: number;
  fatkg: number;
  weight: number;
  height: number;
  sex: string;
  objective: string;
  type: string;
  setType: Dispatch<string>;
  setObjective: Dispatch<string>;
  setAge: Dispatch<number>;
  setFatkg: Dispatch<number>;
  setWeight: Dispatch<number>;
  setProtkg: Dispatch<number>;
  setHeight: Dispatch<number>;
  setSex: Dispatch<string>;
}

const DataContext = createContext<IDataContext>();

export const DataWrapper: FC = ({ children }) => {
  const [protkg, setProtkg] = useState(200);
  const [fatkg, setFatkg] = useState(100);
  const [age, setAge] = useState(18);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [sex, setSex] = useState("male");
  const [objective, setObjective] = useState("mantain");
  const [type, setType] = useState("ecto");
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
