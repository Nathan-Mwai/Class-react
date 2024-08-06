import React from "react";
import { Link } from "react-router-dom";
const Users = ({ user }) => {
 
  return (
    <div className="user">
      <div key={user.id}>
        <h2> Name:{user.name}</h2>
        <p> Username: {user.username}</p>
        <button><Link to={`/users/${user.id}`}>View More...</Link> </button>
      </div>
    </div>
  );
};

export default Users;
