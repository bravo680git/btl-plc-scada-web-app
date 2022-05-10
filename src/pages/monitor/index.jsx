import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SystemStatus from "../../components/systemStatus/SystemStatus";
import SystemAlarm from "../../components/systemAlarm/SystemAlarm";
import Header from "../../components/header/Header";

function MonitorPage() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.store.loginState.isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <>
      <Header />
      <SystemStatus />
      <SystemAlarm />
    </>
  );
}

export default MonitorPage;
