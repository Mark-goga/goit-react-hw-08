import css from './UserMenu.module.css'

export default function UserMenu() {
  return (
    <div className={css.box}>
      <p className={css.text}>Welcome, { }</p>
      <button className={css.button}>LogOut</button>
    </div>
  )
}