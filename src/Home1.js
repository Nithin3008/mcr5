import React, { useContext, useState } from "react";
import { CusineReducerContext } from "./Contexts/CusineReducer";
import { useNavigate } from "react-router";
export const Home1 = () => {
  const { Recipe, addNewData } = useContext(CusineReducerContext);
  const nav = useNavigate();
  const [showEdit, setEdit] = useState(false);
  const recNewPost = {
    cusine: "",
    name: "",
    ingred: "",
    inst: "",
  };
  function submitRec(rec) {
    console.log(rec);
    addNewData(rec);
  }
  return (
    <div>
      <header>
        <div className="headerSec">
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
        <div className="recipeItems">
          {Recipe.map((val) => (
            <ul>
              <li>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src={val.img}
                ></img>
              </li>
              <li>{val.name}</li>
              <li>{val.Type}</li>
              <li onClick={() => nav(`/Recipepost1/${val.id}`)}>
                Ingredient:See Recipe
              </li>
              <li>Instructions:See Recipe</li>
            </ul>
          ))}
          <svg
            onClick={() => setEdit(!showEdit)}
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      </section>
      <div className="modal" style={{ display: showEdit ? "block" : "none" }}>
        <div className="modalData">
          <input type="text" placeholder="enter image url"></input>
          <input
            onChange={(e) => (recNewPost.cusine = e.target.value)}
            type="text"
            placeholder="cusine"
          ></input>
          <input
            onChange={(e) => (recNewPost.name = e.target.value)}
            type="text"
            placeholder="Name"
          ></input>
          <textarea
            onChange={(e) => (recNewPost.ingred = e.target.value)}
            placeholder="Enter ingredients here with commas(,)"
          ></textarea>
          <textarea
            onChange={(e) => (recNewPost.inst = e.target.value)}
            placeholder="Enter Instructions here with pullstop(.)"
          ></textarea>
          <button onClick={() => submitRec(recNewPost)}>Submit</button>
          <button onClick={() => setEdit(!showEdit)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
