import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setThemeMode, setLoginState } from "../../store/slices";
import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.store.themeMode);
  const loginState = useSelector((state) => state.store.loginState);

  const changeTheme = () => {
    if (themeMode === "light") {
      dispatch(setThemeMode("dark"));
    } else {
      dispatch(setThemeMode("light"));
    }
  };

  const handleLogout = () => {
    dispatch(setLoginState({}));
    localStorage.removeItem("isLogin");
    localStorage.removeItem("authToken");
  };

  return (
    <div className="header__container">
      <div className="header__title">Chương trình giám sát máy in lụa</div>

      <div className="header__nav">
        {loginState?.isLogin && (
          <nav>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "6px solid var(--txt)",
                    }
                  : undefined
              }
            >
              Giám sát hệ thống
            </NavLink>
            <NavLink
              to="/report"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "6px solid var(--txt)",
                    }
                  : undefined
              }
            >
              Xem báo cáo
            </NavLink>
          </nav>
        )}
      </div>

      <div className="header__changeTheme">
        <div onClick={changeTheme}>
          {themeMode === "light" ? <FaMoon /> : <FaSun />}
        </div>
      </div>

      <div className="header__account">
        <div className="header__name">
          {loginState.name && <span>{loginState.name}</span>}
        </div>
        <div className="header__logout">
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
