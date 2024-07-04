import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./container/Home";
import "./App.css";
import { auth } from "./config/firebase.config";
import NewProjectComp from "./container/NewProjectComp";

function AuthObserver() {
  const navigate = useNavigate();
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log("User Credential:", userCred);
        console.log("Email:", userCred?.providerData[0]?.email);
      } else {
        navigate("/home/auth", { replace: true });
      }
    });
    return () => unSubscribe();
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter className="text-red-400">
      <AuthObserver />
      <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
        <Routes>
          <Route path="/home/*" element={<Home />}></Route>
          <Route path="/newProject" element={<NewProjectComp />}></Route>
          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
