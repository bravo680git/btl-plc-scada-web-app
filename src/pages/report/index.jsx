import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import SystemReport from "../../components/systemReport/SystemReport";

function Report() {
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
      <SystemReport />
    </>
  );
}

export default Report;
