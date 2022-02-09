import React from "react";
import s from "./Content.module.css";
import Friends from "./Friends/Friends";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {

	return (

		< div className={s.main_content} >

			<ProfileInfo />
			<div className={s.main_content}>
				<Friends />
				<Post
					updateNewPostText={props.updateNewPostText}
					newPostText={props.newPostText}
					addPost={props.addPost} postsData={props.postsData} /></div>
		</div >

	);

};

export default Content;
