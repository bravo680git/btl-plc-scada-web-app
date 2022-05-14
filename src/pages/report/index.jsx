import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import SystemReport from "../../components/systemReport/SystemReport";

function Report() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.store.loginState.isLogin);
  const role = useSelector((state) => state.store.loginState.role);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  useEffect(() => {
    if (role !== "admin") {
      alert("Bạn không có quyền truy cập trang báo cáo");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    document.title = "Báo cáo | Chương trình giám sát máy in lụa";
  }, []);

  return (
    <>
      <Header />
      <SystemReport />
    </>
  );
}

export default Report;
