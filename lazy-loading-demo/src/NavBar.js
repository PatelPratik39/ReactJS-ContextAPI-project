import "./index.css";

import { NavLink, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "link-active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Contact
      </NavLink>
      <Outlet />
    </nav>
  );
};
export default NavBar;
