import styled from 'styled-components'
import { FaMoon } from 'react-icons/fa'
import { Link } from 'gatsby'

export const Nav = styled.nav`
background: ${({ active }) => active ? "linear-gradient(#13e816, skyblue)" : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100% )"};
#13e816
height: 80px;
display: flex;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 999;

@media screen and (max-width: 960px) {
background: ${({ click }) => (click ? "fff" : "linear-gradient(#13e816, skyblue)")};
transition: 0.8s all ease;
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
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`

export const NavIcon = styled(FaMoon)`
  margin: 0 0.5rem 0 2rem; 
`

export const  MobileIcon = styled.div`
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
    top: ${({ click }) => (click ? "100%" : "-1000px") };
      opacity: 1;
      transition all 0.2s ease;
      background: #fff;
  }
`

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
export const NavLinks = styled(Link)`
  font-size: 1.3rem;
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1 rem;
  height: 100%;
  font-family: "Ubuntu", sans-serif;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
      color: #ff4040;
      transition: all 0.3s ease;
    }

  }
`


