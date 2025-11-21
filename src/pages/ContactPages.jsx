import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';

const ContactPages = () => {
  const [shift, setshift] = useState([]);

  axios.get('https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/produkt')
    .then((response) => setshift(response.data))
    .catch((error) => console.log(error, "xatolik"));
  return (
    <div>
        <main>
          {
            shift.map((item) => (
              <div key={item.id} className=' grid grid-cols-2 items-center p-4 gap-5'>
                <img src={item.image} alt="" />
                <h1  className='text-[80px] font-bold'>{item.title}</h1>
              </div>
            ))
   }  

        </main>
    </div>
  )
}

export default ContactPages