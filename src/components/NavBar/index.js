import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from './styled';
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from '../../assets/logo/logo.svg';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
  const location = useLocation();
  const [ user, , onLogout ] = useAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = e => {
    e.preventDefault();
    setShowMobileMenu(!showMobileMenu);
    onLogout();
  };

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ color: '#335EEA', size: '2rem' }}>
          <LogoContainer to="/">
            <img
              src={Logo}
              alt='Landkit'
            />
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)} >
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink active={(location.pathname === '/').toString()} onClick={() => setShowMobileMenu(!showMobileMenu)} to="/">
                <div>
                  <span>Gits</span>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink active={(location.pathname === '/favorites').toString()} onClick={() => setShowMobileMenu(!showMobileMenu)} to="/favorites">
                <div>
                  <span>Favorites Gits</span>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              {user ? (
                <MenuItemLink onClick={e => handleLogout(e)} to="">
                  <div>
                    <span>Logout</span>
                  </div>
                </MenuItemLink>
              ) : (
                <MenuItemLink active={(location.pathname === '/login').toString()} state={{ backgroundLocation: location }} onClick={() => setShowMobileMenu(!showMobileMenu)} to="/login">
                  <div>
                    <span>Login</span>
                  </div>
                </MenuItemLink>
              )}
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
