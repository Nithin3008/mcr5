import React, { createContext } from "react";
import { recipes } from "./CusineData";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
export const CusineReducerContext = createContext();
export const CusineReducerProv = ({ children }) => {
  const initialRecipes = {
    recipeData: [...recipes],
    name: false,
    ingredient: false,
    cusine: false,
  };
  const [state, dispatchMain] = useReducer(DispatchFunc, initialRecipes);
  function DispatchFunc(state, action) {
    if (action.type == "addNewRec") {
      return { ...state, recipeData: [...state.recipeData, action.payload] };
    }
  }

  function addNewData(recData) {
    const x = recData.ingred.split(",");
    const y = recData.inst.split(".");
    const newPost = {
      id: uuidv4(),
      name: recData.name,
      Type: recData.cusine,
      Ingredients: x,
      Recipie: y,
    };
    dispatchMain({ type: "addNewRec", payload: newPost });
  }
  return (
    <>
      <CusineReducerContext.Provider
        value={{ Recipe: state.recipeData, dispatchMain, addNewData }}
      >
        {children}
      </CusineReducerContext.Provider>
    </>
  );
};
