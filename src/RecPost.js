import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { CusineReducerContext } from "./Contexts/CusineReducer";
export const Recipepost1 = () => {
  const { id } = useParams();
  const { Recipe } = useContext(CusineReducerContext);
  const recData = Recipe.find((val) => val.id === id);
  console.log(recData);
  return (
    <>
      <ul className="recPost">
        <li>
          <img src={recData.img}></img>
        </li>
        <div>
          <li>Cusine:{recData.Type}</li>
          <h5>Ingredients</h5>
          <div className="recPost__ingred">
            {recData.Ingredients.map((val) => (
              <li>{val},</li>
            ))}
          </div>
          <h5>Instructions</h5>
          <div className="recPost__inst">
            {recData.Recipie.map((val, index) => (
              <li>
                {index + 1}.{val},
              </li>
            ))}
          </div>
        </div>
      </ul>
    </>
  );
};
