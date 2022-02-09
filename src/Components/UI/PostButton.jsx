import React from 'react';
import s from './PostButton.module.css'
const PostButton = (props) => {
	return (
		<button className={s.post_button}>Add post</button>
	);
}
export default PostButton;