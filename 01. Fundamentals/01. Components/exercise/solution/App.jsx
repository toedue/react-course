import React from "react";
// import MyComponent from "./MyComponent"; // <-- import here
import Greet from "./components/Greet";

const App = () => {
  return (
    <div>
      <h1>Main App</h1>
      {/* <MyComponent /> {/* use the component */} */}
      <Greet />
    </div>
  );
};

export default App;
