import React from "react";
import "./App.css";
import SignIn from "./components/signIN/SignIn";
import { Routes, Route } from "react-router-dom";
import ListDocumentTypes from "./components/ListDocumentTypes/ListDocumentTypes";
import CarInputs from "./components/CarInputs/CarInputs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/list-doc-types" element={<ListDocumentTypes />} />
      <Route path="/car-pricing" element={<CarInputs />} />
    </Routes>
  );
}

export default App;
