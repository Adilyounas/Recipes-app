import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";
import "../index.css";
import "./cusisine.css"

const Cusisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCusine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCusine(params.type);
  }, [params.type]);

  return (
    <motion.div className="grids"   
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.6}}
    
    >
      {cuisine.map((item) => {
        return (
          <div className="card" key={item.id}>
            <NavLink to={"/recipe/" + item.id} key={item.id}>
              <img src={item.image} alt="img" />
              <h5>{item.title}</h5>
            </NavLink>
          </div>
        );
      })}
    </motion.div>
  );
};

const Card = styled.div`
  width: 25%;
  padding: 10px;

  img {
    width: 100%;
    border-radius: 0.8rem;
  }

  a {
    text-decoration: none;
  }

  h5 {
    text-align: center;
    padding: 1rem;
    font-weight: 500;
  }
`;

export default Cusisine;
