import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import About from './components/About';
import NavBar from './components/NavBar';
import UserDetails from './components/UserDetails';

function App() {

  return (
    <div className="App">
        <NavBar />
        <Home />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/about' element={<About/>} />
        < Route path='/users/:id' element={<UserDetails />}/>
        </Routes>
    </div>
  );
}

export default App;
