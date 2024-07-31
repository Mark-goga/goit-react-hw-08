import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

export default function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}
