import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { persistLogin } from "./store/user/thunks";
import { useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(persistLogin());
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
