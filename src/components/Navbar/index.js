import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from "./NavbarElements"
import masjidlogo from '../../images/masjid-90px.png'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "white" }} >
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">
              <img height="70px" src={masjidlogo} alt="Masjid Logo"/>
              Henderson Masjid
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/updates">Updates</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/donate">Donate</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
