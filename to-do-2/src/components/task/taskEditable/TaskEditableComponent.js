import React from "react";

const TaskEditableComponent = props =>{
    return(
        <div className="alert alert-warning d-flex justify-content-between align-items-center container">
            <input
                value={props.text}
                onChange={props.handleEvent}
            >
            </input>
            
            <div className="buttons">
                done?
                <input
                    type="checkbox"
                    checked={props.isDone}
                    onChange={props.handleEvent}
                />
                <button
                    type="button"
                    className="editButton btn btn-success btn-sm"
                    onClick={props.handleEvent}
                >
                    Edit it!
                </button>
            </div>
        </div>
    )
}

export default TaskEditableComponent