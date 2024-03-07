import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {BrowserRouter , Routes, Route, } from 'react-router-dom';



function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register/>}> </Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
