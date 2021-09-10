import React from "react";
import { Link } from "react-router-dom";

const View404Component = () =>(
    <div>
        <h1>Oops! This is a 404 page</h1>
        <h2>Something wrong happened<br/>Let me help you back</h2>
        <Link to="/" class="btn btn-dark btn-block mt-3">Back to Home</Link>
    </div>
)

export default View404Component