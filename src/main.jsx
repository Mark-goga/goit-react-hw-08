import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {persistor, store} from './redux/store'
import App from './components/App/App'
import 'modern-normalize'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
          <App />
          <Toaster/>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
