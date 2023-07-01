import React, { createContext } from "react";
import { recipes } from "./CusineData";
import { useReducer } from "react";

export const CusineReducerContext = createContext();
export const CusineReducerProv = ({ children }) => {
  const initialRecipes = {
    recipeData: [...recipes],
    name: false,
    ingredient: false,
    cusine: false,
  };
  const [state, dispatchMain] = useReducer(DispatchFunc, initialRecipes);
  function DispatchFunc(state, action) {}
  return (
    <>
      <CusineReducerContext.Provider
        value={{ Recipe: state.recipeData, dispatchMain }}
      >
        {children}
      </CusineReducerContext.Provider>
    </>
  );
};
