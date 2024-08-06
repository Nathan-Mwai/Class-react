import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import About from './components/About';
import NavBar from './components/NavBar';
import UserDetails from './components/UserDetails';
import { useEffect, useState } from 'react';
// import Error from './components/Error'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => setUsers(users))
    .catch(err => console.log(err))
}, [])
  

  return (
    <div className="App">
        <NavBar />
        <Routes>
        <Route path='/' element={<Home users={users}/>} />
        <Route path='/about' element={<About/>} />
        < Route path='/users/:id' element={<UserDetails />}/>
        <Route path='/users/add' element={<Form users={users} setUsers={setUsers}/>} />
        {/* <Route path='*' element={<Error />} /> */}
        </Routes>
    </div>
  );
}

export default App;
