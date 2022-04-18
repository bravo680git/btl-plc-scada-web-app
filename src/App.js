import { Route, Routes } from "react-router-dom";
import MonitorPage from "./pages/monitor";
import Reports from "./pages/reports";

function App() {
  return (
    <Routes>
      <Route path="/report" element={<Reports />} />
      <Route path="/" element={<MonitorPage />} />
    </Routes>
  );
}

export default App;
