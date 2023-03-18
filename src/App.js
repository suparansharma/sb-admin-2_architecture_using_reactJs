/* import logo from './logo.svg'; */
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPages from "./Pages/DefaultPages/DefaultPages";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultPages/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
