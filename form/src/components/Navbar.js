export default function Navbar() {
    return (
      <nav className="nav">
        <div className="box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScoyf6b6ggfni5cWwNdEHa8I6_CbgFcp8ew&usqp=CAU"
            alt="dp"
            style={{ height: '80px', width: '90px' }}
          />
          <h1>Dealer Management System</h1>
          <div className="login">
            <p style={{ position: 'relative', top: '10px', left: '15px' }}>
              Akhilesh Sharma
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyG1VLusDfUxvh6a-v4DFOj4xKHb96hv1Lg&usqp=CAU"
              alt="image"
              style={{ padding: '20px', height: '75px', borderRadius: '50%' }}
            />
          </div>
        </div>
        <div className="list">
          <ul>
            <li className={window.location.pathname === '/form' ? 'active' : ''}>
              <a href="/form">Form</a>
            </li>
            <li className={window.location.pathname === '/table' ? 'active' : ''}>
              <a href="/table">Table</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  