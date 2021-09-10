import React from "react";
import FormComponent from "./FormComponent";
import axios from "axios";

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            textForm: "",
            buttonWasPressed: false,
        }
        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount(){
        this.setState({
            textForm:"",
            buttonWasPressed:false,
        })
        console.log(this.state)
    }
    
    handleEvent = e =>{
        e.preventDefault()
        const {name, value, type} = e.target
        this.setState({
            [name]: value
        })

        //if I clicked Add (or Enter), we do this
        if(type!=="text"){
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/tasks`,{  
                text: this.state.textForm,
                isDone: false   
            })
                .then(res => {
                    console.log(res)
                    if(res.status === 200){
                        this.setState({
                            buttonWasPressed: true,
                        })
                    }
                })
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