import React from 'react';
import NavItem from './NavItem/NavItem.jsx';
import s from './Nav.module.css'


const Nav = (props) => {
	return (
		<nav className={s.nav}>
			<div className={s.nav_ul}>
				<NavItem to="/profile" name="Profile" />
				<NavItem to="/messages" name="Messages" />
				<NavItem to="/news" name="News" />
				<NavItem to="/music" name="Music" />
				<NavItem to="/settings" name="Settings" />
				<NavItem to="/" name="Main" />




			</div>
		</nav>
	);
};

export default Nav;