import React from 'react';
import NavBar from './Components/NavBar/navbar';

function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <NavBar /> 
    </div>
  );
}

export default Layout;
