import { useEffect, useState } from 'react'
import Users from './Users'
import Form from './Form'

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(users => setUsers(users))
        .catch(err => console.log(err))
    }, [])


    // console.log(users);
    const displayUsers = users.map(user => <Users key={user.id} user={user} setUsers={setUsers}/> )
    
  return (
    <div className='users'>
        {/* <Form users={users} setUsers={setUsers}/> */}
        {displayUsers}
    </div>
    
  )
}

export default Home