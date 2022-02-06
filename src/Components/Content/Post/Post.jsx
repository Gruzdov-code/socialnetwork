import React from 'react';
import PostButton from '../../UI/PostButton';
import s from './Post.module.css'
import PostItem from './PostItem/PostItem';

const Post = () => {
	return (
		<div>
			<textarea className='{s.area}' name="Написать" id="" cols="10" rows="2"></textarea> <PostButton/>
			<PostItem message="Hello it's my fist post" likecounts="3"/>
			<PostItem message= "How are you? baby" likecounts="5"/>
			
		</div>
	);
};

export default Post;