import css from './Header.module.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import Nav from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import React from 'react';
import AuthNav from 'components/AuthNav/AuthNav';
// import UserNav from 'components/UserNav/UserNav';
// import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
export default function Header() {
  return (
    <div className={css.header}>
      <Logo />
      <Nav />

      <AuthNav />
      {/* <UserNav /> */}
      <BurgerMenu />
    </div>
  );
}
