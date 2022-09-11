import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Router from './config/router'
import { store, persistor } from './Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

function App() {


  const [user, setUser] = useState();



  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
        console.log('user found')
      } else {
        console.log('user not found')
      }
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router user={user} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
