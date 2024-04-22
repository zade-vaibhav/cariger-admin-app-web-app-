import React, { useEffect, useState } from 'react'
import Laborcard from '../laborCard/Laborcard'
import axios from "axios"
import "./karigar.css"
import { Link } from 'react-router-dom'

function  Karigar() {

  const [kariger, setKariger] = useState([])

  useEffect(() => {
    async function fetchemploy() {
      try {
        const response = await axios.get("https://cariger-user-provider.onrender.com/api/v1/auth/labors");
        console.log(response.data.data);
        setKariger(response.data.data)
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }

    fetchemploy();
  }, []);

  console.log(kariger)
  return (
    <div className='employee'>
      <h2>All labors</h2>
      <div className='karigar_container'>
      {
        kariger.map((ele,ind) => {
         return <Laborcard  key={ind} data={ele}  />
        })
      }
      </div>
     

    </div>
  )
}

export default Karigar
