import React from "react";
import s from "./Content.module.css";
import Friends from "./Friends/Friends";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {
	// debugger
	return (

		<div className={s.main_content}>

			<ProfileInfo />
			<div className={s.main_content}>
				<Friends />
				<Post
					dispatch={props.dispatch} profilePage={props.profilePage} /></div>
		</div >

	);

};

export default Content;
