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
            somethingChanged: false
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
            
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${this.state.id}`,{
                text: this.state.text,
                isDone: checked //had to use checked, this.state.isDone was not working, idk why
            })
            .then(res => {
                console.log(res.data)
                /*
                Decided that I wasn't gonna refresh the page for a true/false update to database
                    Update will still happen
                    User will see an async version of the DB

                if(res.data.state){
                    this.setState({
                        somethingChanged: true
                    })
                }
                */
            })
            .catch(error => {console.error('Error!', error);})
            
            this.setState({
                isDone: checked
            })

            
        }
        else if(type==="button"){
            axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tasks/${this.state.id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.state){
                        this.setState({
                            somethingChanged: true
                        })
                    }
                })
                .catch(error => {console.error('Error!', error);})
        }
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