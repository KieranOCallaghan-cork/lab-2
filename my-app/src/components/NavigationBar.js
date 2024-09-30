//imported the nav bar from bootstarp
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//made the nav bar content 
const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/read">Read</Nav.Link>
        <Nav.Link as={Link} to="/create">Create</Nav.Link>
      </Nav>
    </Navbar>
  );
};
//exported the nav bar
export default NavigationBar;