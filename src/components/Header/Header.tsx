import React from 'react';
import './Header.css';



export type HeaderPropsType = {
     head: string
 }

export const Header = (props: HeaderPropsType) => {
    return (
        <header className='header'>
           <img
               src={props.head}
           />
        </header>
    )
}
