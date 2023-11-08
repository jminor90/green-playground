import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
  <Nav variant="pills">

    <Nav.Item>
    <Link to ="/#">
        Home
      </Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="1" href="/CMajor">
        C Major
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="2" disabled>
        NavLink 2
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="3" disabled>
        NavLink 3
      </Nav.Link>
    </Nav.Item>


    <NavDropdown title="Major Keys" id="nav-dropdown">
      <NavDropdown.Item href="/A">A</NavDropdown.Item>
      <NavDropdown.Item href="/B">B</NavDropdown.Item>
      <NavDropdown.Item ><Link to ="/CMajor">C Major</Link></NavDropdown.Item>

      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="Separated link">Separated link</NavDropdown.Item>
    </NavDropdown>
  </Nav>
  )
}