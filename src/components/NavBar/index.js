import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { IconContext } from "react-icons";
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
import { openModalSignAtom } from '../../atoms/user';
import Logo from '../../assets/logo/logo.svg';

const NavBar = () => {
  const [openModalSign, setOpenModalSign] = useAtom(openModalSignAtom);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleLogin = e => {
    e.preventDefault();
    setShowMobileMenu(!showMobileMenu);
    setOpenModalSign(!openModalSign);
    e.stopPropagation();
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
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to="/articles">
                <div>
                  <span>Articles</span>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to="/favorites">
                <div>
                  <span>Favorites</span>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={e => handleLogin(e)} to="/">
                <div>
                  <span>Login</span>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
