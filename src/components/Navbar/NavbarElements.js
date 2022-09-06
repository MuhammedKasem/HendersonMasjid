import styled from 'styled-components'
import { FaMoon } from 'react-icons/fa'
import { Link } from 'gatsby'

export const Nav = styled.nav`
// background: linear-gradient(#13e816, lightgreen);
background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
color: white;
height: 80px;
display: flex;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 999;

@media screen and (max-width: 960px) {
// background: ${({ click }) => (click ? "fff" : "linear-gradient(#13e816, skyblue)")};
transition: 0.8s all ease;
justify-content: space-between;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-indez: 1;
width: 100%;
max-width: 1000px;
`

export const NavLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

export const NavIcon = styled(FaMoon)`
  margin: 0 0.5rem 0 2rem; 
`


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
} 
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
      opacity: 1;
      transition all 0.2s ease;
      background: #fff;
      
  }
`

export const NavItem = styled.li`
  height: 80px;
  color: black;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
export const NavLinks = styled(Link)`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1 rem;
  height: 100%;
  font-family: "Ubuntu", sans-serif;
  color: white;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: black;

    &:hover{
      color: #ff4040;
      transition: all 0.3s ease;
    }

  }
`


