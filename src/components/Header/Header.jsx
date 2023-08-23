import css from './Header.module.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import Nav from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import React from 'react';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';

import UserNav from 'components/UserNav/UserNav';

export default function Header() {
  const { isLoggedIn } = useAuth();
  
  return (
    <div className={css.header}>
      <Logo />
      <Nav />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
      {/* <AuthNav /> */}
      {/* <UserNav /> */}
      <BurgerMenu />
    </div>
  );
}


// Link change need and container