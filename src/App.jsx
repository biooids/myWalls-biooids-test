import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./container/Home";

function App() {
  return (
    <BrowserRouter className="text-red-400">
      <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
        <Routes>
          <Route path="/home/*" element={<Home />}></Route>
          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
