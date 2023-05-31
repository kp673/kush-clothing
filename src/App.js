import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from "./routes/home/home.component";
import NavBar from './routes/nav-bar/navBar.component';
import Shop from './routes/shop/shop.component';
import { setCurrentUser } from "./store/user/user.action";
import { createUserDocument, onAuthStateChangedListner } from "./utils/firebase/firebase.utils";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocument(user)
      }
      dispatch(setCurrentUser(user));
      return unsubscribe;
    });
  }, []);
  
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index={true} element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='authenticate' element={<Authentication />} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>
  );
}

export default App;
