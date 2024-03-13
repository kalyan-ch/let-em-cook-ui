import React from "react";
import NavBar from "./components/Navbar";

const App = () => {
  return(
    <div>
      <NavBar />
      <div className="container items-center h-96 p-10 md:p-12 lg:p-14 text-custom-black dark:text-light-grey">
        <h2 className="text-4xl">Try these Recipes</h2>
        <br/>
        <ul>
          <li>Recipe 1</li>
          <li>Recipe 2</li>
          <li>Recipe 3</li>
        </ul>
      </div>
    </div>
  )
};

export default App;