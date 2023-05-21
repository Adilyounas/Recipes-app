import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./cusisine.css"


const Searched = () => {
  const [searchedReciptes, setSearchedReciptes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const data = await api.json();
    setSearchedReciptes(data.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <motion.div
      className="grids"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {searchedReciptes.map((item) => {
        return (
          <div key={item.id} className="card">
            <NavLink to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.name} />
              <h5>{item.title} </h5>
            </NavLink>
          </div>
        );
      })}
    </motion.div>
  );
};


export default Searched;
