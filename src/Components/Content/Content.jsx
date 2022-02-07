import React from "react";
import s from "./Content.module.css";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Content = (props) => {
	return (
		<div className={s.main_content}>
			<ProfileInfo />
			<Post postsData={props.postsData} />
		</div>
	);
};

export default Content;
