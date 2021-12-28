import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

interface IDataContext {
  age: number;
  protkg: number;
  fatkg: number;
  weight: number;
  height: number;
  setAge: Dispatch<number>;
  setFatkg: Dispatch<number>;
  setWeight: Dispatch<number>;
  setProtkg: Dispatch<number>;
  setHeight: Dispatch<number>;
}

const DataContext = createContext<IDataContext>();

export const DataWrapper: FC = ({ children }) => {
  const [protkg, setProtkg] = useState(200);
  const [fatkg, setFatkg] = useState(100);
  const [age, setAge] = useState(18);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  return (
    <DataContext.Provider
      value={{
        protkg,
        fatkg,
        age,
        weight,
        height,
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
