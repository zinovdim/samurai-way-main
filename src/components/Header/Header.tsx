import React from 'react';
import './Header.css';
import {AppPropsType} from "../../App";


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
