import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginState } from "../../store/slices";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    //
    dispatch(
      setLoginState({
        isLogin: true,
      })
    );
    localStorage.setItem("isLogin", true);
    navigate("/");
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
