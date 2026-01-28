import { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,        // spread operator
      [name]: value   // update từng field
    });
  };

  return (
    <div>
      <h2>Form thông tin người dùng</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={handleChange}
      />

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserForm;
