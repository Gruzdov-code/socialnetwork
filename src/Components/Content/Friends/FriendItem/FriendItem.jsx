import React from 'react';
import s from './FriendItem.module.css'
const FriendItem = (props) => {
	return (
		<div className={s.friend_item}>
			<img
				className={s.icon}
				src={props.img}
				alt="icon"
			/>
			<span>
				{props.name}
			</span>
		</div>
	);
};

export default FriendItem;