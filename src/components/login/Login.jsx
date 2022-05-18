import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setLoginState } from "../../store/slices";
import authApi from "../../api/auth";
import Loading from "../loading/Loading";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (username.length < 1 || password.length < 8) {
        throw "Username and password must have length more than 8 characters";
      }
      const account = { username, password };
      setLoading(true);
      const res = await authApi.login(account);
      setLoading(false);
      toast.success("Loged in, Hello " + res.user);
      dispatch(
        setLoginState({
          isLogin: true,
          name: res.user,
          role: res.role,
        })
      );
      localStorage.setItem("isLogin", true);
      localStorage.setItem("name", res.user);
      localStorage.setItem("authToken", res.authToken);
      localStorage.setItem("role", res.role);

      navigate("/");
    } catch (error) {
      setLoading(false);
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
      <Loading loading={loading} />
    </>
  );
}

export default Login;
