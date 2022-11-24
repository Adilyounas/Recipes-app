import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"

import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../index.css"
import { NavLink } from "react-router-dom"

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()

  }, []);



  async function getPopular() {


   const check = localStorage.getItem("list" )
if (check) {
  setPopular(JSON.parse(check))
}else{

  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
  const data = await api.json()
  const array = await data.recipes
  setPopular(array)
  localStorage.setItem("list" ,JSON.stringify(popular))
}

   
    




  }


  return (
    <motion.div 
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{opacity:0.5}}
    
    >



      <Wrapper >
        <h3>Popular Picture</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem"
        }}>
          {
            popular.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <NavLink to={"/recipe/" + item.id} >
                    <Card >
                      <p>{item.title}</p>
                      <img src={item.image} alt={item.title} />
                      <Gradient />

                    </Card>
                  </NavLink>
                </SplideSlide>

              )
            })
          }

        </Splide>
      </Wrapper>






    </motion.div>
  )

}


const Wrapper = styled.div`
margin:2rem 0rem;
`


const Card = styled.div`
min-height:10rem;
border-radius:2rem;
overflow:hidden;


position:relative;

img{
  border-radius:2rem;
  position:absolute;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
}

p{
  position:absolute;
  z-index:10;
  left:50%;
  bottom:0%;
  transform:translate(-50%, 0%);
  color:white;
  width:90%;
  text-align:center;
  font-weight:400;
  font-size:0.9rem;
  word-spacing:1px;
  letter-spacing:1px;
  height:40%;
display:flex;
justify-content:center;
flex-direction:column;
align-item:center;

}

`

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.4)   );

`



export default Popular