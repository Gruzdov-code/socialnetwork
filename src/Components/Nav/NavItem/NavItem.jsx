import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavItem.module.css';

const setActive = ({isActive}) => isActive ? 'active_link_nav':'';
const NavItem = (props) => {
	return (
		<div>
			<li className={s.item}>
<span className={s.item_span}>
	
</span>
<div className={s.item_div}>
	<NavLink className={setActive} to={`${props.to}`}>{props.name}</NavLink>
	</div>
			  </li>
		</div>
	);
};

export default NavItem;