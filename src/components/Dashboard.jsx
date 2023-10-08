import { useEffect, useState } from 'react'
import '../css/dashboard.css';
import axios from 'axios';
import Image from "./Images"

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
// const Dashboard= () => {
//     // console.log("testDash");
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch("https://capstone-backend-beta.vercel.app/couches")
//         .then((res) => res.json())
//         .then((responseData) => {
//             console.log(responseData); // Log the API response data
//             setData(responseData);
//          })
//          .catch((error) => {
//             console.error("Error fetching data:", error);
//         });
//     }, []);
  
//    return (
//     <div className='couches'>
//         {Array.isArray(data) ? (
//             data.map((couches) => ( 
//                 <h2 key={couches.id}>{couches.material}{couches.color}</h2>
//             ))
//         ) : (
//             <p>No data available.</p>
//         )}
//     </div>
//    );

  
// };

function ShowCouchPics(){

    const [images, setImages] = useState([]);
    const unsplashApiKey = import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY;


    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/collections/8700800/photos/?client_id=${unsplashApiKey}`)
            const data = await response.json()
            setImages(data)
            console.log(data);
        }
        fetchImages()
    }, [])

    return(
        <div className="images">
            {!images ? <h2 className='LoadingImagesText'>Loading...</h2> :
            <section className='couchList'>
                <div className='couchDisplay'>
                    {images.map((image) => (
                        <Image key={image.id}{...image}/>
                    ))}
                </div>
            </section>
            }
        </div>
    )
    
}

// export default Dashboard; showCouchPics;
export default ShowCouchPics;

