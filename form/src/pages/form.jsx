/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-shorthand */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable quotes */
/* eslint-disable import/order */
import { useState } from "react";
import InputForm from './input';
import axios from "axios";

export default function Form() {
  // Initialize state variables
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [techSkills, setTechSkills] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!firstName || !lastName || !dateOfBirth || !address || !phoneNumber || !email || !education || !techSkills) {
      alert("Please fill in all required fields.");
      return;
    }

    // Display form data in the console
    //console.log(firstName, middleName, lastName, dateOfBirth, address, phoneNumber, email, education, techSkills);

    // Create an object with form data
    const formData = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,

      dateOfBirth: dateOfBirth,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      education: education,
      techSkills: techSkills,
    };

    // Display form data object in the console
    //console.log(formData);

    // Send form data to the server using axios
    axios.post("http://localhost:8000/form", formData);

    // Redirect to the table page
    window.location.href = '/table';
  };

  const handleReset = () => {
    // Reset all form fields to their initial values
    setFirstName('');
    setMiddleName('');
    setLastName('');

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
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <InputForm
              type="text"
              id="first-name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="middle-name">Middle Name:</label>
            <InputForm
              type="text"
              id="middle-name"
              value={middleName}
              onChange={e => setMiddleName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <InputForm
            type="text"
            id="last-name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date-of-birth">Date of Birth:</label>
          <InputForm
            type="date"
            id="date-of-birth"
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}
          />
        </div>
        </div>
        <div className="form-row">
          <div className="form-group">
          <label htmlFor="address">Address:</label>
          <InputForm
            type="text"
            id="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number:</label>
          <InputForm
            type="text"
            id="phone-number"
            pattern="[6-9]{1}[0-9]{9}"
            maxLength="10"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>
        </div>
        <div className="form-row">
          <div className="form-group">
          <label htmlFor="email">Email:</label>
          <InputForm
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education / Graduation:</label>
          <InputForm
            type="text"
            id="education"
            value={education}
            onChange={e => setEducation(e.target.value)}
          />
        </div>
        </div>
        <div style={{width: '49%'}}>
          <label htmlFor="tech-skills">Tech Skills:</label>
          <InputForm
            type="text"
            id="tech-skills"
            value={techSkills}
            onChange={e => setTechSkills(e.target.value)}
            // style={{width:'30px'}}
          />
        </div>
        <div style={{ position: 'fixed', bottom: '0px', width: '75%' }}>
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
