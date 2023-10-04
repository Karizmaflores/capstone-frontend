import { useEffect, useState } from 'react'
import '../css/dashboard.css';

//FOR USERS
// const Dashboard= () => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         // fetch("https://capstone-backend-beta.vercel.app/users")
//         fetch("https://capstone-backend-beta.vercel.app/vinyl")
//         .then((res) => res.json())
//         .then((data) => setData(data));
//     }, []);

    const Dashboard= () => {
      const [data, setData] = useState([]);
      useEffect(() => {
          fetch("https://capstone-backend-beta.vercel.app/vinyl")
          .then((res) => res.json())
          .then((responseData) => {
              console.log(responseData); // Log the API response data
              setData(responseData);
          })
          .catch((error) => {
              console.error("Error fetching data:", error);
          });
      }, []);

      //lists users emails
  // return (
  //  <div className='recipes'>
  //   {data.map((user) => (
  //       <h2 key={user.id}>{user.email}</h2>
  //   ))}
  //   </div>
  // );

  //lists vinyl
  return (
    <div className='vinyl'>
        {Array.isArray(data) ? (
            data.map((vinyl) => ( //issue right here
                <h2 key={vinyl.id}>{vinyl.album}</h2>
            ))
        ) : (
            <p>No data available.</p>
        )}
    </div>
   );

  
};

export default Dashboard;