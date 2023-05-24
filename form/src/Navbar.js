export default function Navbar() {
    return (<nav className="nav">
        <div className="box">
        <img src="img_girl.jpg" alt="Girl in a jacket" />
            <h1>Dealer Management System</h1>
            <div className="login">
                <h2>Akhilesh Sharma</h2>
                <img src="img_girl.jpg" alt="image" style={{padding: '20px'}}/>
            </div>


        
        </div>
        {/* <a href="/" className="site-title">Trainee Form</a> */}
        <div className="list">
        <ul >
            <li >    <a href="/form">Form</a>      </li>
            <li>   <a href="/table">Table</a>   </li>
        </ul> 
        </div>
    </nav>)
}