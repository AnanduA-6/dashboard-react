import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path="/"  element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
