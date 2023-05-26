import { Routes, Route, } from 'react-router-dom'

import NavBar from './routes/nav-bar/navBar.component'; 
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='authenticate' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
