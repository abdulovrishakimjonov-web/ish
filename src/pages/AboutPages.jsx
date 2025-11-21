import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutPages = () => {
  const [abujon, setabujon] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((shohruh) => setabujon(shohruh.data.recipes))
      .catch((asomiddin) => console.log(asomiddin, "xatolik"));
  }, []);

  return (
    <div className=" ">
      <main className=" grid grid-cols-3 gap-3 p-3">
        {abujon.map((item) => (
          <div key={item.id}>
            <img className="" src={item.image} alt="" />
            <h1>{item.title}</h1>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AboutPages;
