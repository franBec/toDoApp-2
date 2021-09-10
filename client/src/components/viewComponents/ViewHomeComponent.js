import React from "react";
import {Link} from "react-router-dom"

const ViewHomeComponent = () =>(
    <div class="container">
        <h1 class="text-center mt-5">To-Do App 2</h1>
        <h6 class="text-center">Now with React!</h6>
        <h2>Welcome...</h2>
        <p>This is the To-Do App 2! An Online Web App where you can administrate your tasks</p>
        <p>Let's get started, by going to <Link to="/tasks">Tasks!</Link></p>
        <p>Wanna know why 2? Where's the To-Do App 1? Need more info? Click <Link to="/about">here</Link> for more info</p>
        <h2>BUG</h2>
        <p>When adding a task, page stay frozen even though the add was correctly done</p>
        <p>Temporary fix: force user out of task page to the home page</p>
    </div>
)

export default ViewHomeComponent