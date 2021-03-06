import React from "react";
import axios from "axios";

import TaskListComponent from "./TaskListComponent";

class TaskList extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading: true,
            taskList: [],
            isEmpty: false
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/tasks`)
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        taskList: res.data,
                        isLoading: false
                    })
                }
                else{
                    this.setState({
                        isLoading: false,
                        isEmpty: true
                    })
                }
            })
    }

    render = () =>{
        return(
        <TaskListComponent 
            {...this.state}
        />
    )}
}

export default TaskList