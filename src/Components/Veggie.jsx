import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"

import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from 'react-router-dom';

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
        const array = await data.recipes
      localStorage.setItem("pop", JSON.stringify(array));
    }
  };

  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.6}}
    
    >
      <Wrapper>
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
              <SplideSlide key={item.id}>
                <NavLink to={"/recipe/" + item.id}>
                  <Card>

                    <p>{item.title} </p>
                    <img src={item.image} alt={item.title} />
                    <Gradient />
                  </Card>
                </NavLink>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </motion.div>
  );

};
const Wrapper = styled.div`
    margin: 0rem 0rem;
  `;

const Card = styled.div`
    min-height: 11rem;
    border-radius: 2rem;
    overflow: hidden;

    position: relative;

    img {
      border-radius: 2rem;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      ${'' /* object-fit: cover; */}
    }

    p {
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, 0%);
      color: white;
      width: 90%;
      text-align: center;
      font-weight: 400;
      font-size: .9rem;
      word-spacing:1px;
  letter-spacing:1px;
      height: 40%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-item: center;
    }
  `;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  `;

export default Veggie;
