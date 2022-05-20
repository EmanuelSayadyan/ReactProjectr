import { useState } from "react";
import "./ToDoi.css"


 function ToDoForm({addTask}){
    const [userInput,setUserInput]=useState("")

    
     
   const handleChango = (e) =>{
        setUserInput(e.currentTarget.value)
    }    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e) =>{
        if(e.key === "Enter"){
            <button  type="text" placeholder="greq sez huzox harcer"  className="fg">klik</button>
            handleSubmit(e)
            
        }
    }
    return (
        <form onSubmit={handleSubmit}> 
            <input className="l" value={userInput} type="text"  onChange={handleChango}  onKeyDown = {handleKeyPress}   placeholder="Grel nshanakutuny..."/>    <button>placeholder</button>
            <h3>todos.length</h3>
            <input className="h" value={userInput} type="text"  onChange={handleChango}  onKeyDown = {handleKeyPress} placeholder="greq k"></input>
        </form>

         
    )
        
}



export default ToDoForm


