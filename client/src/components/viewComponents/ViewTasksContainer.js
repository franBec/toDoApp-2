import React from "react";
import ViewTasksComponent from "./ViewTasksComponent";

class ViewTasks extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }

    render = () =>(
        <ViewTasksComponent
            {...this.state}
            reMount = {this.reMount}
        />
    )
}

export default ViewTasks