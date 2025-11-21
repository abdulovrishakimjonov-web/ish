import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomePages = () => {
    const [data, setData] = useState([])
  useEffect(() => {
    axios
        .get('https://dummyjson.com/recipes')
        .then((abu) => setData(abu.data.recipes) )
        .catch((main) => console.log(main, "xatolik") );
  }, []);
    
  return (
    <div>
        <div className='max-w-[1500px] m-auto'>
            <main className="grid grid-cols-7 gap-3">
            {
                data.map((item) => (
                    <div key={item.id}>
                        <img className='w-[200px]' src={item.image} alt="" />
                        <h1 className='bg-cyan-600 w-[200px]'>{item.name}</h1>
                    </div>
                ))
            }
        </main>
        </div>
    </div>
  )
}

export default HomePages