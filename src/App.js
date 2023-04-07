
import {Link,Route, Routes} from "react-router-dom"
import {Customers} from "./Pages/Customers"
import {Employees} from "./Pages/Employees"
import { Container } from "@mui/material";
import Menu from "./Pages/Components/Menu"

function App() {
  return (
    <div className="App">
      <Menu/>

      {/* <nav>
        <ul>
          <li>
            <Link to="/customers"> Customers</Link>
            <Link to="/employees"> Employees</Link>
          </li>
        </ul>
      </nav> */}
      <header className="App-header">
        <Container>
        <Routes>
            <Route path="/customers" element={<Customers />}/>
            <Route path="/employees" element={<Employees />}/>
           
          </Routes>

        </Container>
        
      </header>
    </div>
  );
}

export default App;
