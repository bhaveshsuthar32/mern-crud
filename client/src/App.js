import './App.css'; 
import AddUser from './components/AddUser' ;
import NavBar from './components/NavBar';
import AllUser from './components/AllUser';
import Home from './components/Home';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
;
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/all' element={<AllUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
