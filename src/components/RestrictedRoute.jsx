import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
  const islogin = useSelector(selectIsLoggedIn);
  return islogin ? <Navigate to={redirectTo} /> : component;
}
