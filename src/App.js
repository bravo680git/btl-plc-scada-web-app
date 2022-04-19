import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/login";
import MonitorPage from "./pages/monitor";
import Report from "./pages/report";
import { useEffect } from "react";

function App() {
  const themeMode = useSelector((state) => state.store.themeMode);
  useEffect(() => {
    if (themeMode === "light") {
      document.querySelector("html").setAttribute("data-theme", "light");
    } else {
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  }, [themeMode]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/report" element={<Report />} />
      <Route path="/" element={<MonitorPage />} />
    </Routes>
  );
}

export default App;
