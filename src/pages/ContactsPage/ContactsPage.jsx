import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

import css from './ContactsPage.module.css'
export default function ContactsPage() {
  // const loader = useSelector(selectLoading);
  // const error = useSelector(selectError);

  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchContacts());
  }, [dispach]);
  

  return (
    <div className={css.box}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* {loader && <Loader />} */}
      {/* {error && <ErrorMessage />} */}
      <ContactList/>
    </div>
  );
}