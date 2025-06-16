import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Contact from "./pages/Contact";
import Form from "./components/auth/Form";
import NavBar from "./components/common/Header"

  function App() {
    return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;