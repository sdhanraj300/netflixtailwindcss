import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
