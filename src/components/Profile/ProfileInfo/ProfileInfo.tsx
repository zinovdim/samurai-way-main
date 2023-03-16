import React from 'react';
import s from './ProfileInfo.module.css'


// type PropsType = {
//     id:number
//     name: string
// }
//
// type NavPropsType = {
//     nav: PropsType[]
// }

export const ProfileInfo = () => {
    return (
        <div className={s.discriptionBlock}>
            <div>
                <img src='http://www.dejurka.ru/wp-content/uploads/2012/04/13cityofthefuture-590x313.jpg'/>
            </div>
            <div>
                ava+discription
            </div>
        </div>
    )
}