import { useEffect, useState } from "react";
import './table.css';

function Table(userData) {
    const [data,setData]=useState([]);
    useEffect(()=> {
        fetch("http://localhost:9002/getAllUser", {
            method: "Get",
        })
          .then((res)=>res.json())
          .then((data) =>{
            // console.log(data,"userData");
            setData(data.data)
          });
          

    },[]);
        
    //  function handleSendData(id) {
    //         const selectedData = data.find((i) => i.id === id);
    //         window.location.href = `/send?id=${selectedData.id}`; }

         
    //    return (
    //         <table>
             
    //             <tr>
                    
    //                 <th>id</th>
    //                 <th>Name</th>
    //                 <th>Email</th>
    //                 <th>Skill</th>
    //             </tr>
    //             {data.map(i=>{
    //                 return(
    //                     <tr key={i.id}>
    //                         <td>{i.id}</td>
    //                         <td>{i.fname}</td>
    //                         <td>{i.email}</td>
    //                         <td>{i.skill}</td>
    //                         <td>
    //                         <button onClick={() => handleSendData(i.id)}>Send Data</button>
    //                         </td>
    //                     </tr>
    //                 );
    //             })}

            
            
    //         </table>
                       
                       
    // );
    function handleSendData(data) {
        // console.log(data)

        //const selectedData = data.find((d) => d.id === id);
    
        // Replace "/send" with the route for the page that will receive the data
    
       // window.location.href = `/send?id=${id}`;
    
       const dataString = JSON.stringify(data);
    
       localStorage.setItem('tableData', dataString);
    
       window.location.href = `/form/data`;
    
      }
    
    
      return (
    
        <table >
    
          <thead>
    
            <tr>
    
              <th>ID</th>
    
              <th>Name</th>
    
              <th>Skills</th>
              <th>Education</th>
              <th>View </th>
    
            </tr>
    
          </thead>
    
          <tbody>
    
            {data.map((d) => (
    
              <tr key={d._id}>
    
                <td>{d._id}</td>
    
                <td>{d.fname +" "+ d.mname+" "+ d.lname }</td>
    
                <td>{d.skill}</td>
                <td>{d.education}</td>
    
                <td>
    
                    <button onClick={() => handleSendData(d)}>View More</button>
    
                  </td>
    
              </tr>
    
            ))}
    
          </tbody>
    
        </table>
    
      );

}


export default Table;

