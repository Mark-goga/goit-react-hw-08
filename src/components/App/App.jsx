import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

export default function App() {
  const dispach = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispach(refreshUser());
  }, [dispach]);

  return isRefreshing ? <div>loading page</div> :(
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={<ContactsPage />}
                redirectTo={"/login"}
              />
            }
          ></Route>
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} redirectTo={"/contacts"}/>}
          ></Route>
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo={"/contacts"}/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}
