export default function Navbar() {
    return (<nav className="nav">
        <div className="box">
        <img src="C:\Users\shubhamtripathi01\Downloads\MicrosoftTeams-image.png" alt="Girl in a jacket" style={{height:'80px',width:'90px'}} />
            <h1>Dealer Management System</h1>
            <div className="login">
                <p style={{position:'relative',top:'10px',left:'15px'}}>Akhilesh Sharma</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyG1VLusDfUxvh6a-v4DFOj4xKHb96hv1Lg&usqp=CAU" alt="image" style={{padding: '20px',height:'75px',borderRadius:'50%'}}/>
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