import React, { useState } from "react";

const Form = ({users,setUsers}) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((user) => setUsers([user, ...users]))
      .catch((err) => console.log(err))
  };

  return (
    <div className="form-wrapper">
      <>
        <h1>Post User</h1>
      </>
      <form onSubmit={handleSubmit}>
        <>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        </>
        <>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />
        </>
        <>
          <input type="submit" />
        </>
      </form>
      {/* <>
        <button>Submit</button>
        </> */}
    </div>
  );
};

export default Form;