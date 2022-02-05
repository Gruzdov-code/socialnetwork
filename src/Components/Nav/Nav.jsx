import React from 'react';
import NavItem from './NavItem/NavItem.jsx';
import s from './Nav.module.css'


const Nav = () => {
	return (
		<div>
			<nav className={s.nav}>
          <div className={s.nav_ul}>
           <NavItem/>
			  <NavItem/>
			  <NavItem/>
			  <NavItem/>
			  <NavItem/>
			  <NavItem/>
			  <NavItem/>


         
          </div>
        </nav>
		</div>
	);
};

export default Nav;