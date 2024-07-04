import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DiceGame } from "./DiceGame.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rules from "./Rules.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={DiceGame} />
      <Route path="/rules" Component={Rules} />
    </Routes>
  </BrowserRouter>
);
