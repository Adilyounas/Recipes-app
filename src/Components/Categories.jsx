import React from 'react'
import { FaHamburger,FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles,GiChopsticks } from 'react-icons/gi';
import styled from "styled-components"
import { NavLink } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="list">

        <NavLink to={"/cuisine/Italian"} >
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>

        <NavLink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
        </NavLink>

        <NavLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </NavLink>

        <NavLink to={"/cuisine/Japanese"}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </NavLink>
    </div>
  )
}



export default Categories