import  { createContext, useReducer, useMemo } from "react";
import { initialState, reducer } from "../../Utility/reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Memoize the value array so consumers don't re-render unnecessarily
  const value = useMemo(() => [state, dispatch], [state]);
  
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};