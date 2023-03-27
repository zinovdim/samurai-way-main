import React from 'react';
import s from './Post.module.css'
import {PostPropsType} from "../../../../redux/state";


export type PostsPropsType= {
    post: PostPropsType
}


export const Post = (props:PostsPropsType) => {
    return (
        <div className={s.item}>
            <img src = 'https://rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg' />
            {props.post.message}
            <div>
                <span>like</span> {props.post.mess}
            </div>
        </div>
)
}