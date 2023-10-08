import {useState} from 'react';
import axios from 'axios';
 

 
//    function showCouchPics(){

//     const fetchAPI=async()=>{
//         const response = await axios.get('https://api.unsplash.com/photos/?client_id=nbCnL35uicj1fNTrbDue8dGS9Zh1GfqO69wf7LczzAg');
//         console.log(response.data);
//         const data = await response.data;


//     }



//     fetch("https://unsplash.com/collections/8700800/photos")
//     .then((response) => {
//         response.json();
//     }).then((data) => {
//         console.log(data)
//  })
// }
export default function Image(props) {
    return (
        <>
        <div>
            <img src={props.urls.thumb} alt={props.user.name} />
        </div>
        </>
    )
}