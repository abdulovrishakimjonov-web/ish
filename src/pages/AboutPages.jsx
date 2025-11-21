import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutPages = () => {
  const [abujon, setabujon] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((shohruh) => setabujon(shohruh.data))
      .catch((asomiddin) => console.log(asomiddin, "xatolik"));
  }, []);

  return (
    <div>
      <main className="h-[680px]">
        {abujon.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AboutPages;
