import { useState } from 'react';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css'

import { useDispatch } from 'react-redux';
import DeleteContactsModal from '../DeleteContactsModal/DeleteContactsModal';


export default function Contact({ contact }) {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  function handleClick() {
    // dispatch(deleteContact(contact.id));
    setModal(!modal);
  }
  return (
    <div className={css.box}>
      <div>
        <p className={css.text}>{contact.name}</p>
        <p className={css.text}>{contact.number}</p>
      </div>
      <button onClick={handleClick} className={css.button} type="button">
        Delete
      </button>
      {modal && <DeleteContactsModal contact={contact} setModal={setModal}/>}
    </div>
  );
}