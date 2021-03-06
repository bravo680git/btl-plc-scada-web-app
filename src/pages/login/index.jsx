import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import Login from "../../components/login/Login";
import { useEffect } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.store.loginState.isLogin);
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  useEffect(() => {
    document.title = "Đăng nhập | Chương trình giám sát máy in lụa";
  }, []);

  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export default LoginPage;
