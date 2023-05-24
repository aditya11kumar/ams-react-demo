import React, { useState, useEffect } from "react";
import './table.css';

function Table() {
//   const [data, setData] = useState([]);

//  useEffect(() => {

//     //setData(data)
//     fetch('127.0.0.1:8000/api/data')
//       .then(response => response.json())
//       .then((data) => {console.log(data)
//         setData(data.data)
//       });
//   }, []);

const [data,setData]=useState([]);

    useEffect(()=> {

        fetch("http://localhost:8000/api/data", {

            method: "Get",

        })

          .then((res)=>res.json())

          .then((data) =>{

           // console.log(data,"userData");

            setData(data.data)

          });

         



    },[]);

  // const data = [
  //   { id:1,
  //     firstName: 'ADITYA',
  //     middleName: '',
  //     lastName: 'KUMAR',
  //     gender: '',
  //     dateOfBirth: '1999-07-11',
  //     address: 'WARD NO.4',
  //     phoneNumber: '7667025267',
  //     email: 'adityakumar110799@gmail.com',
  //     education: 'Graduation',
  //     techSkills: 'python'
  //   },
  //   { id: 2, 
  //     firstName: 'bkjvkj',
  //     middleName: '',
  //     lastName: 'KUMAR',
  //     gender: '',
  //     dateOfBirth: '6853-04-05',
  //     address: 'Mahendra Colony, Banuchhaper, Bettiah',
  //     phoneNumber: '9934498503',
  //     email: 'dtrs@djgkgl',
  //     education: 'vfyjfyu',
  //     techSkills: 'biugug'
  //   },
  // ];
  function handleSendData(data) {
    //const selectedData = data.find((d) => d.id === id);
    // Replace "/send" with the route for the page that will receive the data
   // window.location.href = `/send?id=${id}`;
   const dataString = JSON.stringify(data);
   localStorage.setItem('tableData', dataString);
   window.location.href = `/form/data`;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d._id}>
            <td>{d._id}</td>
            <td>{d.firstName +" "+ d.middleName+" "+ d.lastName }</td>
            <td>{d.email}</td>
            <td>
                <button onClick={() => handleSendData(d)}>Send Data</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
