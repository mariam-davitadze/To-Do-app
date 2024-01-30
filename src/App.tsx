import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Pages from "./constants/Pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState("tasks");
  console.log(Pages.tasks);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
