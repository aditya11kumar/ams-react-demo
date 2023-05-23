import './form.css';
import React ,{useState} from "react";
import axios from "axios"
import Input from './Input';

function Form(){

    const [user, setUser]= useState({

        fname: "",
        mname: "",
        lname: "",
        phone: "",
        email: "",
        address: "",
        education: "",
        skill: "",
        dob: "",
        gender: ""
        

    })
    const handleChange = e=> {
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const form = () =>{
       
        axios.post("http://localhost:9002/form",user)
        
    }

    return (
        <div>
            <form>
                <div className="container-block">
                        <label className="div">First Name</label><br></br>
                        <Input type="text" name='fname' value={user.fname} onChange={handleChange} className="input-field" pattern="[A-Za-Z/s]+"   required /><br></br>
                </div>

                <div className="container-block">
                    <label className="div">Middle Name</label><br></br>
                    <Input type="text" name='mname' value={user.mname} onChange={handleChange} className="input-field"    /><br></br>
                </div>

                <div className="container-block">
                    <label className="div">Last Name</label><br></br>
                    <Input type="text" name='lname' value={user.lname} onChange={handleChange} className="input-field"  required /><br></br>
                </div>

                <div className="container-block">
                    <label className="div">Phone</label><br></br>
                    <Input type="text"  name="phone" value={user.phone} onChange={handleChange} className="input-field" pattern ="[6-9]{1}[0-9]{9}" maxlength="10"  required/>
                </div>

                <div className="container-block">
                    <label className="div">Email</label><br></br>
                    <Input type="email" name='email' value={user.email} onChange={handleChange} className="input-field" required /><br></br>
                </div>

                <div className="container-block">
                    <label className="div">Address</label><br></br>
                    <Input type="text" name='address' value={user.address} onChange={handleChange} className="input-field" required /><br></br>
                </div>

                <div className="container-block">
                    <label className="div">Education</label><br></br>
                    <Input type="text" name='education' value={user.education} onChange={handleChange} className="input-field" required /><br></br>
                </div>

                <div className="container-block">
                    <label className="div">Skill</label><br></br>
                    <Input type="text" name='skill' value={user.skill} onChange={handleChange} className="input-field" required /><br></br>
                </div>

                <div className="container-block">
                    <label className="div">DOB</label><br></br>
                    <Input type="date" name='dob' value={user.dob} onChange={handleChange} className="input-field" required /><br></br>
                </div>

                <div className="container-block">
                    <label className="div">Gender</label><br></br>
                    <Input type="radio" name='gender' value="male"  onChange={handleChange} className="gender" required />Male
                    <Input type="radio" name='gender' value="female" onChange={handleChange} className="gender" required />Female<br></br>
                </div>

                <div className="btn-container-block">
                 <input type="submit" onClick={form} className="button"></input>
                 <input type="reset"  className="button" ></input>
                </div>

                

                

            </form>
            
               
        
        </div>
    );
}

export default Form;