import { Route, Routes } from "react-router";
import "./App.css";
import { Home1 } from "./Home1";
import { Recipepost1 } from "./RecPost";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home1></Home1>}></Route>
        <Route
          path="/Recipepost1/:id"
          element={<Recipepost1></Recipepost1>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
