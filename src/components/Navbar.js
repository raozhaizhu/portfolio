

import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const App = () => {
  return (
    <div>
      {/* Navbar 示例 */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">首页</Nav.Link>
            <Nav.Link href="#about">关于</Nav.Link>
            <NavDropdown title="更多" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">动作1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">动作2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">动作3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Button 示例 */}
      <Button variant="primary">点击我</Button>
    </div>
  );
};

export default App;
