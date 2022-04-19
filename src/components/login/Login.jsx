import { useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {};

  return (
    <>
      <div className="login__container">
        <form>
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
            <button onClick={handleSubmit}>Gửi</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
