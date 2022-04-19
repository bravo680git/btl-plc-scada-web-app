import { Route, Routes } from "react-router-dom";
import MonitorPage from "./pages/monitor";
import Report from "./pages/report";

function App() {
  return (
    <Routes>
      <Route path="/report" element={<Report />} />
      <Route path="/" element={<MonitorPage />} />
    </Routes>
  );
}

export default App;
