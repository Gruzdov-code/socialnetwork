import React from 'react';
import s from './Content.module.css'
import Post from './Post/Post';
const Content = () => {
	return (
		
			<div className={s.main_content}>
          <img className={s.head_image} src="https://pbs.twimg.com/profile_banners/1153728498688827392/1563908974" alt='imag'></img>
			 <Post/>
        </div>
		
	);
};

export default Content;