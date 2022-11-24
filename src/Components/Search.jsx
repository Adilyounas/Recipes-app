import { FaSearch } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';

import "../index.css"
import { useNavigate, NavLink } from "react-router-dom"

import React, { useState } from 'react'

const Search = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState("")

    function SubmitHandler(e) {
        e.preventDefault()
        navigate("/searched/" + input)

    }




    return (
        <>
            <div className="logo">
                <NavLink to={"/"} >
                    <GiKnifeFork />  Delicious

                </NavLink>
            </div>
            <form action="" className='form' onSubmit={SubmitHandler}>
                <FaSearch />
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </form>
        </>
    )
}

export default Search;
