import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostPropsType} from "../../../App";

export type MyPostsPropsType = {
    myPosts: PostPropsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.myPosts.map((p) => {
        return (
            <Post
                // id={p.id}
                // message={p.message}
                // mess={p.mess}

                key={p.id}
                post={p}
            />
        )
    })

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={()=>{}}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

