import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./veggie.css"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";

const Veggie = () => {
  const [Veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("pop");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tages=vegetarian`
      );
      const data = await api.json();
      const array = await data.recipes;
      localStorage.setItem("pop", JSON.stringify(array));
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="wrapper"
       
      >
        <h3>Our Veggitarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {Veggie.map((item) => {
            return (
              <SplideSlide key={item.id} className="spliderContainer">
                <NavLink to={"/recipe/" + item.id}>
             
                    <img src={item.image} alt={item.title} />
                    <p>{item.title} </p>
                

                 
                </NavLink>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </motion.div>
  );
};


export default Veggie;
