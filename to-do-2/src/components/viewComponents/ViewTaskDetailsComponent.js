import React from "react";
import TaskEditable from "../task/taskEditable/TaskEditableContainer";

/*
    The handleEvent
        
        onClick = {(e)=>{stuff}}

    is lazy programming. Ideally it sould be something like
        
        onClick = {props.handleEvent}

    And let a Container manage the logic
*/

const ViewTaskDetailsComponent = () =>{
    return(
        <div className="container">
            {console.log()}
            <h1>Editing Task!</h1>
            <TaskEditable />
            <button
                type="button"
                className="btn btn-primary"
                onClick = {(e) =>{
                    e.preventDefault()
                    window.location = '/tasks'}
                }
            >
                Go Back
            </button>
        </div>
    )
}

export default ViewTaskDetailsComponent