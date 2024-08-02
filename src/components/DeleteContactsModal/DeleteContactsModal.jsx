import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from './DeleteContactsModal.module.css'
export default function DeleteContactsModal({contact , setModal}) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(deleteContact(contact.id));
    setModal(false);
  }
  return (

    <div className={css.wrapBox}>
      <div className={css.box}>
        <p>you are sure you want to delete the contact?</p>
        <button onClick={handleClick}>yes</button>
        <button onClick={() => setModal(false)}>no</button>
      </div>
    </div>
  );
}
