import { useEffect, useState } from 'react'
import '../css/dashboard.css';
// import axios from 'axios';
import Image from "./Images"
import AddCouch from './AddCouch';
import ShowCouchPics from './ShowCouchPics';


//FOR USERS
// const Dashboard= () => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         // fetch("https://capstone-backend-beta.vercel.app/users")
//         fetch("https://capstone-backend-beta.vercel.app/vinyl")
//         .then((res) => res.json())
//         .then((data) => setData(data));
//     }, []);


//LISTS USERS EMAILS
  // return (
  //  <div className='emails'>
  //   {data.map((user) => (
  //       <h2 key={user.id}>{user.email}</h2>
  //   ))}
  //   </div>
  // );


  //LISTS VINYLS
    // const Dashboard= () => {
    //   const [data, setData] = useState([]);
    //   useEffect(() => {
    //       fetch("https://capstone-backend-beta.vercel.app/vinyl")
    //       .then((res) => res.json())
    //       .then((responseData) => {
    //           console.log(responseData); // Log the API response data
    //           setData(responseData);
    //       })
    //       .catch((error) => {
    //           console.error("Error fetching data:", error);
    //       });
    //   }, []);



//LISTS COUCHES
const Dashboard= () => {
    // console.log("testDash");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://capstone-backend-beta.vercel.app/couches")
        .then((res) => res.json())
        .then((responseData) => {
            console.log(responseData); // Log the API response data
            setData(responseData);
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);
  
   return (
    <div className='couches'>
        {Array.isArray(data) ? (

            <ShowCouchPics data={data} setData={setData}/>

        ) : (
            <p>No data available.</p>
        )}
    </div>
   );

  
};


export default Dashboard; 