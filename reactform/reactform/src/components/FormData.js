import './form.css';

import InputForm from "./Input"

export default function FormData(){

    const dataString = localStorage.tableData

    const dataObject = JSON.parse(dataString);


    return <div className="App">

    <form>

      <div className="container-block">

        <label htmlFor="first-name" className="div" >First Name:</label>

        <InputForm

          type="text"

          id="first-name"

          className="input-field"

          value={dataObject.fname}

          onChange={e => {}}

        />

      </div>

      <div className="container-block">

        <label htmlFor="middle-name" className="div">Middle Name:</label>

        <InputForm

          type="text"

          id="middle-name"

          className="input-field"

          value={dataObject.mname}

          onChange={e => {}}

        />

      </div>

      <div className="container-block">

        <label htmlFor="last-name" className="div">Last Name:</label>

        <InputForm

          type="text"

          id="last-name"

          className="input-field"

          value={dataObject.lname}

          onChange={e => {}}

        />

      </div>



      <div className="container-block" >

        <label htmlFor="date-of-birth" className="div">Date of Birth:</label>

        <InputForm

          type="text"

          id="date-of-birth"

          className="input-field"

          value={dataObject.dob}

          onChange={e => {}}

        />

      </div>

      <div className="container-block" >

        <label htmlFor="address" className="div">Address:</label>

        <InputForm

          type="text"

          id="address"

          className="input-field"

          value={dataObject.address}

          onChange={e => {}}

        />

      </div>

      <div className="container-block" >

        <label htmlFor="phone-number" className="div">Phone Number:</label>

        <InputForm

          type="text"

          id="phone-number"

          className="input-field"

          pattern="[0-9]{10}"

          value={dataObject.phone}

          onChange={e => {}}

        />

      </div>

      <div className="container-block" >

        <label htmlFor="email" className="div">Email:</label>

        <InputForm

          type="email"

          id="email"

          className="input-field"

          value={dataObject.email}

          onChange={e => {}}

        />

      </div >

      <div className="container-block">

        <label htmlFor="education" className="div">Education / Graduation:</label>

        <InputForm

          type="text"

          id="education"

          className="input-field"

          value={dataObject.education}

          onChange={e => {}}

        />

      </div>

      <div className="container-block" >

        <label htmlFor="tech-skills" className="div">Tech Skills:</label>

        <InputForm

          type="text"

          id="tech-skills"

          className="input-field"

          value={dataObject.skill}

          onChange={e => {}}

        />

      </div>

    </form>

    </div>

}

