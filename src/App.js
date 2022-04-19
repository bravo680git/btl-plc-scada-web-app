import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import MonitorPage from "./pages/monitor";
import Report from "./pages/report";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/report" element={<Report />} />
      <Route path="/" element={<MonitorPage />} />
    </Routes>
  );
}

export default App;
