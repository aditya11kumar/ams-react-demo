import Form from './Form';
import Table from './Table'
import Navbar from "./Navbar";
import FormData from './FormData';

function App(){
    let component
    switch (window.location.pathname){
        case "/":
            component = <Form/>
            break
        case "/form":
            component=<Form/>
            break
        case "/table":
            component=<Table/>
            break 
        case "/form/data": component = <FormData />

            break           
    }

    return (
        <>
        
        <Navbar></Navbar>
        {component}

        </>
        
       

    );
}

export default App;