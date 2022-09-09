import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import './header.css';


const Header = () => {
  return (
    <header className="header">
      <LeftSection />
      <RightSection />
    </header>
  );
};

export default Header;
