import "./App.css";
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import Vosmos from "./component/Vosmos";
import Login from "./component/LogIn";
import Dashboard  from "./component/Dashboard";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vosmos />} />

          <Route path="/signin" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;