import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import './Profile.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../redux/state";



export type ProfilePropsType= {
    myPosts: PostPropsType[]
    addMessage:(newTitle:string)=>void
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts addMessage={props.addMessage} myPosts={props.myPosts} />
        </div>
    )
}