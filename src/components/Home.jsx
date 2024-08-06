import Users from './Users'

const Home = ({users, setUsers}) => {
    


    // console.log(users);
    const displayUsers = users.map(user => <Users key={user.id} user={user} setUsers={setUsers}/> )
    
  return (
    <div className='users'>
        {displayUsers}
    </div>
    
  )
}

export default Home