import React from "react";

const FormComponent = props => (
    <div>
        <form onSubmit={props.handleEvent}>
            <input
                name="textForm"
                placeholder="Add New Task!"
                value={props.textForm}
                onChange={props.handleEvent}
            >
            </input>
            <div>
                <input
                    type="submit"
                    className="btn btn-button btn-primary mt-2"
                    value="Add"
                ></input>
            </div>
        </form>
    </div>
)

export default FormComponent