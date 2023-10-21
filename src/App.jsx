import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Hooks
import { useAuth } from "./hooks/useAuth";

// Pages
import Home from "./pages/Products/Home";
import Login from "./pages/ClientAuth/Login";
import Register from "./pages/ClientAuth/Register";

function App() {
  const { auth, loading } = useAuth();

  console.log("teste" + auth);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!auth ? <Login /> : <Home />} />
          <Route path="/register" element={!auth ? <Register /> : <Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
