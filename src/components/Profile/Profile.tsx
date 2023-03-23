import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import './Profile.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../App";


export type ProfilePropsType= {
    myPosts: PostPropsType[]
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={props.myPosts} />
        </div>
    )
}