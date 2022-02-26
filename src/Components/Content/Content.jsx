import React from "react";
import s from "./Content.module.css";
import Friends from "./Friends/Friends";
import PostContainer from "./Post/PostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {
	// debugger
	return (

		<div className={s.main_content}>

			<ProfileInfo />
			<div className={s.main_content}>
				<Friends />
				<PostContainer

				/> </div>
		</div >

	);

};

export default Content;
