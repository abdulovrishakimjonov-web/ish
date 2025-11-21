import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BlogPages = () => {
  const [tisot, settisot] = useState([])

  useEffect(() => {
    axios.get('https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/produkt')
    .then((respons) => settisot(respons.data))
    .catch((error) => console.log(error, "xatolik"));
  }, [])
  return (
    <div>
        <main>
          {
            tisot.map((item) => (
              <div key={item.id} className='flex flex-col text-center justify-center p-3'>
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
              </div>
            ))
          }
          </main>
    </div>
  )
}

export default BlogPages