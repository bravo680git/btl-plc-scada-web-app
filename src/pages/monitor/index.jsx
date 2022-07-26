import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

import SystemStatus from "../../components/systemStatus/SystemStatus";
import SystemAlarm from "../../components/systemAlarm/SystemAlarm";
import Header from "../../components/header/Header";
import { useState } from "react";

function MonitorPage() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.store.loginState.isLogin);
  const [socket, setSocket] = useState();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    const socket = io("https://scada-api.herokuapp.com", {
      auth: { token: localStorage.getItem("authToken") },
    });
    setSocket(socket);
    socket.on("connect", () => console.log("Connect to websocket server"));
    socket.on("disconnect", () => alert("Disconnet to websocket server"));
  }, []);

  useEffect(() => {
    document.title = "Giám sát hệ thống | Chương trình giám sát máy in lụa";
  }, []);

  return (
    <>
      <Header />
      <SystemStatus socket={socket} />
      <SystemAlarm socket={socket} />
    </>
  );
}

export default MonitorPage;
