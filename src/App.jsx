import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Hooks
import { useAuth } from "./hooks/useAuth";

// Pages
import Home from "./pages/Products/Home";
import Auth from "./pages/ClientAuth/Auth";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={!auth ? <Auth /> : <Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
