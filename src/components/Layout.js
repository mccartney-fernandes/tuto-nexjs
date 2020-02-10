import React from 'react';

import Menu from './Menu';
import Hero from './Hero';

export default function Layout({children}) {    
  return (
    <>
        <Menu />                  
        <Hero />       
        {children}
    </>
  );
}
