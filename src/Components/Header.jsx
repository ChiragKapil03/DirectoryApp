import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
        <div style={{ height: "40px", backgroundColor: "green", justifyContent: "center", padding: "10px", display:"flex", alignItems:"center" }}>
        <h2 style={{color:"whitesmoke"}}>Chirag's Directory App</h2>
        </div>
        <div style={{ height: "40px", backgroundColor: "lightgray", padding: "10px", display:"flex", alignItems:"center", justifyContent: "Space-evenly" }}>
            <button><Link to="/">Add new Person </Link></button>
            <button><Link to="/retrieve">Retrieve Information </Link></button>
        </div>
    </>
  )
}
