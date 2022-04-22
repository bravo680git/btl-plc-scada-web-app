import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setThemeMode } from "../../store/slices";
import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.store.themeMode);

  const changeTheme = () => {
    if (themeMode === "light") {
      dispatch(setThemeMode("dark"));
    } else {
      dispatch(setThemeMode("light"));
    }
  };

  return (
    <div className="header__container">
      <div className="header__title">Chương trình giám sát máy in lụa</div>

      <div className="header__nav">
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
      </div>

      <div className="header__changeTheme">
        <div onClick={changeTheme}>
          {themeMode === "light" ? <FaMoon /> : <FaSun />}
        </div>
      </div>

      <div className="header__account">
        <div className="header__name">
          <span>Quoc Nhien</span>
        </div>
        <div className="header__logout">
          <button>Đăng xuất</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
