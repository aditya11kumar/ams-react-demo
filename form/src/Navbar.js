export default function Navbar() {
    return (<nav className="nav">
        <div className="box"><h1>Traini Form</h1></div>
        {/* <a href="/" className="site-title">Trainee Form</a> */}
        <div className="list">
        <ul >
            <li >    <a href="/form">Form</a>      </li>
            <li>   <a href="/table">Table</a>   </li>
        </ul> 
        </div>
    </nav>)
}