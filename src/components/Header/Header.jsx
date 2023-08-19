import css from './Header.module.css'

import Nav from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import React from 'react';
export default function Header() {
    return (
  
        <header className={css.header}>
          <Logo />
          <Nav />
        </header>
      
    );
}



