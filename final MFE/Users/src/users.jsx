import React from 'react';
import Header from './header';



const Users = () => {
  const data = [
{ id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
{ id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
{ id: 3, name: 'Bob Johnson', age: 40, email: 'bob.johnson@example.com' },
{ id: 4, name: 'Alice Williams', age: 35, email: 'alice.williams@example.com' },
  ];



  return (
<div>
  <Header />
<h2>Table Microfrontend</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Email</th>
</tr>
</thead>
<tbody>
{data.map((item) => (
<tr key={item.id}>
<td>{item.name}</td>
<td>{item.age}</td>
<td>{item.email}</td>
</tr>
))}
</tbody>
</table>
</div>
  );
};



export default Users;