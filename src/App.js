import { Routes, Route } from "react-router-dom";
// import { Main, Login, Register } from "./components";
import {Main} from './components/Main'
import {Login} from './components/Login'
import {Register} from './components/Register'
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
