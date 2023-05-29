import { Route, Routes } from 'react-router-dom';

import Authentication from './routes/authentication/authentication.component';
import Home from "./routes/home/home.component";
import NavBar from './routes/nav-bar/navBar.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='authenticate' element={<Authentication />} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>
  );
}

export default App;
