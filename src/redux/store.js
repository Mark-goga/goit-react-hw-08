import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from './contacts/slice'
import filterReduser from './filter/slice'
import authReduser from './auth/slice'
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistedReducer = persistReducer({
  key: 'auth',
  storage,
  whitelist: ["token"],
}, authReduser);

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filterReduser,
    auth: authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = (persistStore(store));