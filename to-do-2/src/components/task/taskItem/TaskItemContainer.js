import React from "react";
import axios from "axios";
import TaskItemComponent from "./TaskItemComponent";

class TaskItem extends React.Component{
    constructor(){
        super()
        this.state = {
            id: "",
            text: "",
            isDone: false,
        }
        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount(){
        this.setState({
            id: this.props.value._id,
            text: this.props.value.text,
            isDone: this.props.value.isDone
        })
    }

    handleEvent = e =>{
        const {type, checked} = e.target
        if(type==="checkbox"){
            this.setState({
                isDone: checked
            })
            
            axios.put(`${__dirname}/tasks/${this.state.id}`,{
                text: this.state.text,
                isDone: checked //had to use checked, this.state.isDone was not working, idk why
            })
                .then(res => console.log(res.data))
                .catch(error => {console.error('Error!', error);})
    
        }
        else if(type==="button"){
            axios.delete(`${__dirname}/tasks/${this.state.id}`)
                .then(res => console.log(res))
                .catch(error => {console.error('Error!', error);})
        }
        
        /*
        the ideal would be no refreshing the page
        instead doing the database request and maintain a coherent display to the user

        by now for testing purposes and because is easier
        every database request will refresh the page
            that will re-mount the tasklist container
                that requests all the tasks
        */
        window.location = '/tasks'
    }
        
        render = () =>{
            return(
        <TaskItemComponent
            {...this.state}
            handleEvent = {this.handleEvent}
        />
        )
    }
}

export default TaskItem