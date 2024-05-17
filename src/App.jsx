import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import form1A from "../"



function App() {


  return (
    <Router>
      <main className="pt-12">
        <Routes>
          <Route path="/form1A" element={<form1Page />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
