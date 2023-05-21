import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
  return (
    <div>
      <h3>I am candy</h3>
      <Link to="/">Get a different snack</Link>
    </div>
  )
}

export default Candy;