/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import '../sass/table.css';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('http://localhost:8000/api/data', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  function handleSendData(data) {
    // Handle sending data by storing it in local storage and redirecting
    const dataString = JSON.stringify(data);
    localStorage.setItem('tableData', dataString);
    window.location.href = '/form/data';
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Tech-Skills</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((d) => (
          <tr key={d._id}>
            <td>{d._id}</td>
            <td>{`${d.firstName} ${d.middleName} ${d.lastName}`}</td>
            <td>{d.email}</td>
            <td>{d.techSkills}</td>
            <td>
              {/* Clicking on the icons triggers the handleSendData function */}
              <a href="#" onClick={() => handleSendData(d)}>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/view-1024.png"
                  alt="View"
                  style={{ height: '20px', width: '30%', padding: '4px' }}
                />
              </a>

              <a href="#" onClick={() => handleSendData(d)}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUk_k4grzKJAb5SIlBV3AGKrVgsYU9N6d52WD2UCDbHg&s"
                  alt="Delete"
                  style={{ height: '20px', width: '30%', padding: '4px' }}
                />
              </a>

              <a href="#" onClick={() => handleSendData(d)}>
                <img
                  src="https://spng.pngfind.com/pngs/s/70-704184_png-file-svg-pencil-edit-icon-png-transparent.png"
                  alt="Edit"
                  style={{ height: '20px', padding: '4px', width: '30%' }}
                />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
