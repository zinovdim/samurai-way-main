import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostPropsType} from "../../../App";

export type MyPostsPropsType= {
    myPosts: PostPropsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.myPosts.map((p) => {
        return(
            <Post
                key={p.id}
                post={p}
            />
        )})

    return (
        <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
    )
}

