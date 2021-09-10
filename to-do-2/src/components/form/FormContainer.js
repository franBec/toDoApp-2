import React from "react";
import FormComponent from "./FormComponent";
import axios from "axios";

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            textForm: ""
        }
        this.handleEvent = this.handleEvent.bind(this)
    }
    
    handleEvent = e =>{
        e.preventDefault()
        const {name, value, type} = e.target
        this.setState({
            [name]: value
        })

        //if I clicked Add (or Enter), we do this
        if(type!=="text"){
            axios.post(`${__dirname}/tasks`,{  
                text: this.state.textForm,
                isDone: false   
            })
                .then(res => console.log(res.data))
            window.location = '/tasks'
        }  
    }

    render = () =>(
        <FormComponent
            {...this.state}
            handleEvent = {this.handleEvent}
        />
    )
}

export default Form