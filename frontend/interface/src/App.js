import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Contact from "./pages/Contact";
import NavBar from "./components/common/Header"
import Accueil from "./components/common/Accueil"
import Form from "./components/auth/Form";

//Faut rajouter et créer la page settings, mes associations et contacts

  function App() {
    return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;