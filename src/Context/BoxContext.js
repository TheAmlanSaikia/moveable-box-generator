import { createContext, useContext, useReducer } from "react";
import { boxReducerFunction } from "../Reducer/BoxReducer";

const BoxContext = createContext();

const initialState = {
  keyBoardCheck: false,
  boxData: [],
};

const BoxProvider = ({ children }) => {
  const [boxState, boxDispatch] = useReducer(boxReducerFunction, initialState);

  return (
    <BoxContext.Provider value={{ boxState, boxDispatch }}>
      {children}
    </BoxContext.Provider>
  );
};
/**
 * 
 * @returns custom hook for using context values 
 */

const useBox = () => useContext(BoxContext);

export { BoxProvider, useBox };
