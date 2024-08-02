import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './Navigation.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const login = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeNavLinkClass}>
        Home
      </NavLink>
      {login && <NavLink to="/contacts" className={makeNavLinkClass}>
        Contacts
      </NavLink>}
    </nav>
  );
}