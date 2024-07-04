import Home from "./components/Home/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Pay from "./components/Pay/Pay";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path="/"  element={<Home />}></Route>
      <Route exact path="/myPay"  element={<Pay />}></Route>
      <Route exact path="/profile"  element={<Profile />}></Route>
      <Route exact path="/myDocuments"  element={<Home />}></Route>
      <Route exact path="/reimbursement"  element={<Home />}></Route>
      <Route exact path="/taxcalculator"  element={<Home />}></Route>
      <Route exact path="/investment"  element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
