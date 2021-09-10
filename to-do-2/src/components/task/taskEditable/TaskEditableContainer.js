import React from "react";
import TaskEditableComponent from "./TaskEditableComponent";
import axios from "axios";

class TaskEditable extends React.Component{
    constructor(){
        super()
        this.state = {
            id:"",
            text:"",
            isDone:false
        }
        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount(){
        const endURL = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        try {
            axios.get(`${__dirname}/tasks/${endURL}`)
            .then(res =>{
                this.setState({
                    id: res.data._id,
                    text: res.data.text,
                    isDone: res.data.isDone
                })
            })
            .catch(err => {
                if (err.response.status === 404) {
                    window.location.href= '/404'
                }
              })
        } catch (err) {console.log(err)}
    }

    handleEvent = e =>{
        const {value, type, checked} = e.target
        
        if(type === "text"){
            this.setState({
                text: value
            })
        }
        else if(type === "checkbox"){
            this.setState({
                isDone: checked
            })
        }
        else{
            axios.put(`${__dirname}/tasks/${this.state.id}`,{
                id: this.state.id,
                text: this.state.text,
                isDone: this.state.isDone
            })
                .then(res => console.log(res.data))
                .catch(error => {console.error('Error!', error);})
            
            window.location = '/tasks'
        }

    }
    
    render = () =>(
        <TaskEditableComponent
            {...this.state}
            handleEvent = {this.handleEvent}
        />
    )
}

export default TaskEditable