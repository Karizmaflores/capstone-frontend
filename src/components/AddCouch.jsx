import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/addCouch.css';

const AddCouch = ({ token, user, couches, setCouches }) => {
  const [couchData, setCouchData] = useState({
    material: "suede",
    color: "",
    wear: "",
    age: "",
  });

  useEffect(()=>{
    console.log(couchData)
  },[couchData])

  console.log(couchData, 'couchData')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCouchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://capstone-backend-beta.vercel.app/create-couch",
        {
          material: couchData.material,
          color: couchData.color,
          wear: couchData.wear,
          age: couchData.age,
          // user_id: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Succesfully added couch");
        setCouches([...couches, couchData]);
        setCouchData({
          material: "",
          color: "",
          wear: "",
          age: "",
        });
      })
      .catch((error) => {
        console.error("Error adding couch:", error);
      });
  };

return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        Material:
        <select className='select'
          name='material'
          value={couchData.material}
          onChange={handleChange}
          required
        >
          <option value=''  >Select an Option</option>
          <option value='leather' default>Leather</option>
          <option value='cloth'>Cloth</option>
          <option value='microfiber'>Microfiber</option>
          <option value='linen'>Linen</option>
          <option value='suede'>Suede</option>
        
        </select>
      </label>

      <label className='label'>
        Color:
        <select className='select'
          name='color'
          value={couchData.color}
          onChange={handleChange}
          required
        >
          <option value='black'>Black</option>
          <option value='gray'>Gray</option>
          <option value='brown'>Brown</option>
          <option value='white'>White</option>
          <option value='blue'>Blue</option>
          <option value='red'>Red</option>
          
        </select>
      </label>

      <label className='label'>
        wear:
        <select className='select'
          name='wear'
          value={couchData.wear}
          onChange={handleChange}
          required
        >
          <option value='new'>New</option>
          <option value='great'>Great</option>
          <option value='good'>Good</option>
          <option value='fair'>Fair</option>
          <option value='poor'>Poor</option>
        
        </select>
      </label>

      <label className='label'>
        Age:
        <select className='select'
          name='age'
          value={couchData.age}
          onChange={handleChange}
          required
        >
          <option value='0'>New</option>
          <option value='1'>1 year</option>
          <option value='2'>2 years</option>
          <option value='3'>3 years</option>
          <option value='4'>4 years</option>
          <option value='5'>5 years</option>
          
        </select>
      </label>

      <button className='submit' type='submit'>
        Add Couch
      </button>
    </form>
  );
};

export default AddCouch;
