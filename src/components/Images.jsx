import {useState} from 'react';
import axios from 'axios';
 
export default function Image(props) {
    return (
        <>
        <div>
            <img src={props.urls.thumb} alt={props.user.name} />
        </div>
        </>
    )
}