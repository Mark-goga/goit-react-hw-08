import { createSelector } from "@reduxjs/toolkit";
import {selectNameFilter} from '../filter/selectors'
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], 
  (contacts, filter) => {
    const numberFilter = Number(filter);
    if (isNaN(numberFilter)) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts.filter((contact) =>
        contact.number.includes(filter)
      );
    }
  }
);
