import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from './AppBar.module.css'
export default function AppBar() {
  return (
      <div className={css.container}>
        <Navigation />
        <UserMenu/>
        <AuthNav/>
      </div>
  )
}