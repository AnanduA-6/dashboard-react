
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Pay from "./components/Pay/Pay";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path="/"  element={<Login />}></Route>
      <Route exact path="/myPay"  element={<Pay />}></Route>
      <Route exact path="/profile"  element={<Profile />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
