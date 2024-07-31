import AppBar from "../AppBar/AppBar";

export default function Layout({children}) {
  return (
    <header>
      <AppBar />
      {children}
    </header>
  )
}