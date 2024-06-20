import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from '../src/utils/firebase/firebase.utils'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authenticate/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { checkUserSession } from './store/user/user.action';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    // with saga
    dispatch(checkUserSession());

    // without saga
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // })
    // return unsubscribe;
    // effect only runs on initialization, ignore warning
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
