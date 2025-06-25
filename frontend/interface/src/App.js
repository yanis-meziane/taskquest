import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/Header"
import Accueil from "./components/common/Accueil"
import Form from "./components/auth/Form";
import Login from "./components/auth/Login"
import Settings from "./components/common/Settings"
import Footer from "./components/common/footer"

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path="/form" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;