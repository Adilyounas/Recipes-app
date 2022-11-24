import React, { useEffect, useState, params } from 'react'
import { useParams } from "react-router-dom"
import styled from "styled-components"
import "../index.css"
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion"

const Searched = () => {
    const [searchedReciptes, setSearchedReciptes] = useState([])
    let params = useParams()

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
        <motion.div className="grid"  
        
        animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.6}}
        
        >

            {searchedReciptes.map((item) => {
                return (
                    <Card key={item.id}>
                    <NavLink to={"/recipe/" + item.id} >

                        <img src={item.image} alt="images" />
                        <h5>{item.title} </h5>
                    </NavLink>
                    </Card>
                );
            })}
        </motion.div>
    )
}



const Card = styled.div`
width:20%;
  img {
    width: 100%;
    border-radius: .8rem;
  }

  a {
    text-decoration: none;
  }

  h5 {
    text-align: center;
    padding: 1rem;
    font-weight:500;
  }
`;

export default Searched