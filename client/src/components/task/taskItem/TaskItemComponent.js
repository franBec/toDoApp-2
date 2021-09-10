import React from "react";
import {Link, Redirect} from "react-router-dom"

const TaskItemComponent = props =>{
    const completedTextStyle = {
        fontStyle: "italic",
        textDecoration: "line-through"
    }
    if(props.somethingChanged)
        return(<Redirect to='/tasks'/>)

    return(
        <div className="alert alert-info d-flex justify-content-between align-items-center container">
            <p className="m-0 text" style={props.isDone ? completedTextStyle: null}>{props.text}</p>
            
            <div className="buttons">
                <input
                    type="checkbox"
                    checked={props.isDone}
                    onChange={props.handleEvent}
                />
                <Link
                    to={"tasks/"+props.id}
                    className="editButton btn btn-warning btn-sm"
                    >
                    Edit
                </Link>
                
                <button
                    type="button"
                    className="editButton btn btn-danger btn-sm"
                    onClick={props.handleEvent}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}



export default TaskItemComponent