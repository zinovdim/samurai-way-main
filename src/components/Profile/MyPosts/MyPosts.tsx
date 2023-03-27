import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostPropsType} from "../../../redux/state";


export type MyPostsPropsType = {
    myPosts: PostPropsType[]
    addMessage: (newTitle:string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let [newTitle, setNewTitle] = useState("")
    // console.log(newTitle)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setError('')
        setNewTitle(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(newTitle)
        setNewTitle('')
    }


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
                    <input
                        value={newTitle}
                        onChange={onChangeInputHandler}
                    />
                </div>
                <div>
                    <button onClick={onClickButtonHandler}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

