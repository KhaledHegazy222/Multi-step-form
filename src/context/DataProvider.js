import React, { createContext, useContext, useMemo, useState } from "react";

const dataContext = createContext();

export const useData = () => {
  const context = useContext(dataContext);

  return context;
};

const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const dataObject = useMemo(() => {
    return { data, setData };
  }, [data, setData]);

  return (
    <dataContext.Provider value={dataObject}>{children}</dataContext.Provider>
  );
};

export default DataProvider;
