import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Hooks
import { useAuth } from "./hooks/useAuth";

// Pages
import Home from "./pages/Products/Home";
import Auth from "./pages/ClientAuth/Auth";
import Search from "./pages/Products/Search";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/authentication" element={!auth ? <Auth /> : <Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
