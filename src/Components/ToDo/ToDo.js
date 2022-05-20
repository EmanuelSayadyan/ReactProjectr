import "./ToDo.css"
function ToDo({todo,toggleTask,removeTask}){

    return (
        <div className="jj"  key={todo.id}>
            <div className="jk" onClick={()=>toggleTask(todo.id)}>  {todo.task} </div>
            <div className="jk" onClick={()=>removeTask(todo.id)}>  X </div>

        </div>
    )
}   
export default ToDo                 