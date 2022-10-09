import { createContext, useContext, useReducer } from "react";
import { boxReducerFunction } from "../Reducer/BoxReducer";

const BoxContext = createContext();

const initialState = [{
 boxId:"",
 zIndex:"",
 selected:""

}]

const BoxProvider = ({ children }) =>{

    const [ boxState, boxDispatch] = useReducer(boxReducerFunction, []);

    return (
         <BoxContext.Provider value={{ boxState, boxDispatch}}>
             {children}
         </BoxContext.Provider> 

    )

} 

const useBox = () => useContext(BoxContext);

export { BoxProvider, useBox};



