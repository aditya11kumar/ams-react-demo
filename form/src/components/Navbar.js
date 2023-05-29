/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable key-spacing */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
export default function Navbar() {
  return (
    <nav className="nav">
        <div className="box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScoyf6b6ggfni5cWwNdEHa8I6_CbgFcp8ew&usqp=CAU"
            alt="dp"
            style={{ height: '80px', width: '90px' }}
          />
          <p style={{position:'relative', top:'15px', left:'10px'}}>Dealer Management System</p>
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
