import { useDispatch, useSelector } from 'react-redux'
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispach = useDispatch();
  function handleClick() {
    dispach(logOut());
  }
  return (
    <div className={css.box}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button type='button' onClick={handleClick} className={css.button}>LogOut</button>
    </div>
  )
}