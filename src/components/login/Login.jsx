import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setLoginState } from "../../store/slices";
import authApi from "../../api/auth";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (username.length < 8 || password.length < 8) {
        throw "Username and password must have length more than 8 characters";
      }
      const account = { username, password };
      const res = await authApi.login(account);
      toast.success("Loged in, Hello " + res.user);
      dispatch(
        setLoginState({
          isLogin: true,
          name: res.user,
        })
      );
      localStorage.setItem("isLogin", true);
      localStorage.setItem("name", res.user);
      localStorage.setItem("authToken", res.authToken);

      navigate("/");
    } catch (error) {
      toast.error(error);
      setPassword("");
    }
  };

  return (
    <>
      <div className="login__container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="login__title">Đăng nhập</div>

          <div className="login__input">
            <label htmlFor="username">Tên người dùng</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="login__input">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login__btn">
            <button type="button" onClick={handleSubmit}>
              Gửi
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
