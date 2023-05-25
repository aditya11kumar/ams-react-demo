import InputForm from "./input"
export default function FormData(){
    const dataString = localStorage.tableData
    const dataObject = JSON.parse(dataString);
    // console.log(dataObject)
    return <div className="App">
    <form>
    <div className="form-row">
          <div className="form-group">
        <label htmlFor="first-name">First Name:</label>
        <InputForm
          type="text"
          id="first-name"
          value={dataObject.firstName}
          onChange={e => {}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="middle-name">Middle Name:</label>
        <InputForm
          type="text"
          id="middle-name"
          value={dataObject.middleName}
          onChange={e => {}}
        />
      </div>
      </div>
      <div className="form-row">
          <div className="form-group">
        <label htmlFor="last-name">Last Name:</label>
        <InputForm
          type="text"
          id="last-name"
          value={dataObject.lastName}
          onChange={e => {}}
        />
      </div>

      <div className="form-group">
        <label htmlFor="date-of-birth">Date of Birth:</label>
        <InputForm
          type="text"
          id="date-of-birth"
          value={dataObject.dateOfBirth}
          onChange={e => {}}
        />
      </div>
      </div>
      <div className="form-row">
          <div className="form-group">
        <label htmlFor="address">Address:</label>
        <InputForm
          type="text"
          id="address"
          value={dataObject.address}
          onChange={e => {}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone-number">Phone Number:</label>
        <InputForm
          type="text"
          id="phone-number"
          pattern="[0-9]{10}"
          value={dataObject.phoneNumber}
          onChange={e => {}}
        />
      </div>
      </div>
      <div className="form-row">
          <div className="form-group">
        <label htmlFor="email">Email:</label>
        <InputForm
          type="email"
          id="email"
          value={dataObject.email}
          onChange={e => {}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="education">Education / Graduation:</label>
        <InputForm
          type="text"
          id="education"
          value={dataObject.education}
          onChange={e => {}}
        />
      </div>
      </div>
      <div>
        <label htmlFor="tech-skills">Tech Skills:</label>
        <InputForm
          type="text"
          id="tech-skills"
          value={dataObject.techSkills}
          onChange={e => {}}
        />
      </div>
    </form>
    </div>
}