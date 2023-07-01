import React, { useContext } from "react";
import { CusineReducerContext } from "./Contexts/CusineReducer";

export const Home1 = () => {
  const { Recipe } = useContext(CusineReducerContext);
  console.log(Recipe);
  return (
    <div>
      <header>
        <div>
          <input type="text" placeholder="search for you recipe"></input>
          Filters:
          <div>
            <label>
              <input type="radio"></input>Name
            </label>
            <label>
              <input type="radio"></input>Ingredients
            </label>
            <label>
              <input type="radio"></input>Cusine
            </label>
          </div>
        </div>
      </header>
      <section>
        <h1>All Recipies</h1>
        <div>
          {Recipe.map((val) => (
            <ul>
              <li>{/* <img></img> */}</li>
              <li>{val.name}</li>
              <li>{val.Type}</li>,<li>Ingredient:See Recipe</li>
              <li>Instructions:See Recipe</li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
};
