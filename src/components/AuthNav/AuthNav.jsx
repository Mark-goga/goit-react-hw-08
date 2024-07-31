import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.wrapRegistration}>
      <NavLink to="/register" className={makeNavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={makeNavLinkClass}>
        Log In
      </NavLink>
    </div>
  );
}