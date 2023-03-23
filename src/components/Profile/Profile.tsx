import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import './Profile.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../App";


export type ProfilePropsType= {
    myPosts: PostPropsType[]
}

// let posts = [
//     {id: 1, message: 'Hi!!', mess: 28},
//     {id: 2, message: 'Hello!!!', mess: 35},
//     {id: 3, message: 'Hy!!!', mess: 21},
//     {id: 4, message: 'Respect!!!', mess: 18},
//     {id: 5, message: 'Good Lack', mess: 35},
//     {id: 6, message: 'Good!!!', mess: 35},
//     {id: 7, message: 'Good Bye', mess: 35},
//     {id: 8, message: 'Helllooo', mess: 35}
// ]

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={props.myPosts} />
        </div>
    )
}