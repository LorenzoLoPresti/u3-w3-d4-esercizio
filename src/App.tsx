import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./compontents/MainPage";
import MyJumbotron from "./compontents/MyJumbotron";
import MyNavbar from "./compontents/MyNavbar";
import SingleNews from "./compontents/SingleNews";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyJumbotron />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news/:id" element={<SingleNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
