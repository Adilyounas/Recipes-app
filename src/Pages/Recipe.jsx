import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import {motion} from "framer-motion"
const Recipe = () => {
  const [item, setItem] = useState({});
  const [activeTab, setActiveTab] = useState("");

  const params = useParams();

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  const fetchDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setItem(data);
  };
  return (
    <motion.div className="deailWrapper" 
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:1}}
    
    >
      <div>
        <h3>{item.title}</h3>
        <img src={item.image} alt="image" />
      </div>

      <div>
        <button
          className={activeTab === "Instructions" ? "active" : ""}
          onClick={() => setActiveTab("Instructions")}
        >
          Instructions
        </button>
        <button
          className={activeTab === "Ingredients" ? "active" : ""}
          onClick={() => setActiveTab("Ingredients")}
        >
          Ingredients
        </button>

        {activeTab === "Instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: item.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: item.instructions }}></p>
          </div>
        )}

        {activeTab === "Ingredients" && (
          <ul>
            {item.extendedIngredients.map((incre) => {
              return <li key={incre.id}>{incre.original}</li>;
            })}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Recipe;
