import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


// ===== Importing Component =====

// === Authentication ===
import LoginPage from './Authentication/LoginPage';
import RegisterPage from './Authentication/RegisterPage';


// === Header-Footer ===
import Header from './Header-Footer/Header';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={LoginPage}></Route>

          {/* === Authentication ===   */}
          <Route path="/login" Component={LoginPage}></Route>
          <Route path="/signup" Component={RegisterPage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
