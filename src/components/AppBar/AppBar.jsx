import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from './AppBar.module.css'
import { selectIsLoggedIn } from "../../redux/auth/selectors";
export default function AppBar() {
  const islogin = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <Navigation />
      {islogin ? <UserMenu /> : <AuthNav />}
    </div>
  );
}