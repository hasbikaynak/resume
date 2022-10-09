import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

const NavbarLeft = () => { 
  
  const style2 = { fontFamily: "Dancing Script",
   };

  return (
    <div>
     
      <Navbar
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
        bg="light" expand="lg"
      >     
        <a href=""><img
          className="d-fluid d-lg-none img-profile rounded-circle "
          src="/img/profile1.jpg"
          alt=""
          style={{ maxHeight: "50px", marginLeft: '0px' ,boxShadow:" 1px 2px 4px #fae1d7" }}
        /></a>
        <NavbarBrand className="img-fluid d-lg-none " style={style2}>
          Mehmet Hasbi Kaynak
        </NavbarBrand>
        <span className="d-none d-lg-block">
          <a href=""><img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            
            src="/img/profile1.jpg"
            alt=""
            style={{ boxShadow:" 2px 4px 9px #fae1d7"}}

          /></a>
        </span>

        <Navbar.Toggle aria-controls="navbarSupportedContent"/>

        <Navbar.Collapse  className="collapse navbar-collapse" id="navbarSupportedContent" >
          <Nav className="navbar-nav">
            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link js-scroll-trigger" href="#about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                className="nav-link js-scroll-trigger"
                href="#experience"
              >
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link js-scroll-trigger" href="#education">
                Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                className="nav-link js-scroll-trigger"
                href="#contact"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link className="btn btn-warning" href="https://drive.google.com/file/d/1xDBp2DjVwdtzVmZrHiWslXHnErQWKuts/view?usp=sharing" target="_blank">
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarLeft;