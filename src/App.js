import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import { store, persistor } from "~/store";

import Routes from "~/routes";
import history from "~/services/history";

import GlobalStyle from "~/styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3500} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
