import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <div className="header__container">
      <div className="header__title">Chương trình giám sát máy in lụa</div>

      <div className="header__nav">
        <nav>
          <NavLink to="/">Giám sát hệ thống</NavLink>
          <NavLink to="/report">Xem báo cáo</NavLink>
        </nav>
      </div>

      <div className="header__changeTheme">
        <div>
          <FaSun />
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
