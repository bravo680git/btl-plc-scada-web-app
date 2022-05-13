import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/login";
import MonitorPage from "./pages/monitor";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Report from "./pages/report";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const themeMode = useSelector((state) => state.store.themeMode);
  const isLogin = useSelector((state) => state.store.loginState.isLogin);

  useEffect(() => {
    if (themeMode === "light") {
      document.querySelector("html").setAttribute("data-theme", "light");
    } else {
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  }, [themeMode]);

  useEffect(() => {
    document.title = "Chương trình giám sát máy in lụa";
  }, []);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/" element={<MonitorPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
