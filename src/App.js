import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Hotels from "./components/Hotels/Hotels";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default App;
