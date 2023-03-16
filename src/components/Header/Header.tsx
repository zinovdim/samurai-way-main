import React from 'react';
import './Header.css';


type HeaderPropsType = {
    avatar:string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className='header'>
           <img
               src={props.avatar}
           />
        </header>
    )
}
