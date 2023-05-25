import { useState } from "react";
import InputForm from './input';


import axios from "axios";
export default function Form(){
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [techSkills, setTechSkills] = useState('');
  

  
    const handleSubmit = event => {
      event.preventDefault();
      
      console.log(firstName, middleName, lastName, gender, dateOfBirth, address, phoneNumber, email, education, techSkills);
      //const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
      
      const formData= {"firstName" : firstName,"middleName": middleName,"lastName": lastName,"gender": gender,"dateOfBirth": dateOfBirth,"address": address, "phoneNumber":phoneNumber, "email":email,"education": education, "techSkills":techSkills}
      console.log(formData)

      axios.post("http://localhost:8000/form",formData)
      window.location.href='/table';

      // fetch('http://localhost:8000/api/form', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // })
      // .then(response => response.text())
      // .then(data => {
      //   console.log(data);
      // })
      // .catch(error => {
      //   console.error(error);
      // });




    };
    
  
    const handleReset = () => {
      setFirstName('');
      setMiddleName('');
      setLastName('');
      setGender('');
      setDateOfBirth('');
      setAddress('');
      setPhoneNumber('');
      setEmail('');
      setEducation('');
      setTechSkills('');
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first-name">First Name:</label>
            <InputForm
              type="text"
              id="first-name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="middle-name">Middle Name:</label>
            <InputForm
              type="text"
              id="middle-name"
              value={middleName}
              onChange={e => setMiddleName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name:</label>
            <InputForm
              type="text"
              id="last-name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          {/* <div>
            <label htmlFor="gender-male">Gender<br></br>Male</label>
            <InputForm
              type="radio"
              id="gender-male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={e => setGender(e.target.value)}
            />
            <label htmlFor="gender-female">Female</label>
            <InputForm
              type="radio"
              id="gender-female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={e => setGender(e.target.value)}
            />
          </div> */}
          <div>
            <label htmlFor="date-of-birth">Date of Birth:</label>
            <InputForm
              type="date"
              id="date-of-birth"
              value={dateOfBirth}
              onChange={e => setDateOfBirth(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <InputForm
              type="text"
              id="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number:</label>
            <InputForm
              type="text"
              id="phone-number"
              pattern ="[6-9]{1}[0-9]{9}"
              maxlength="10"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <InputForm
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="education">Education / Graduation:</label>
            <InputForm
              type="text"
              id="education"
              value={education}
              onChange={e => setEducation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tech-skills">Tech Skills:</label>
            <InputForm
              type="text"
              id="tech-skills"
              value={techSkills}
              onChange={e => setTechSkills(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    );
}