import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos, setTodos] = useState([{task: "sample ", id: uuidv4(), isDone:false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone:false}]
        });
        setNewTodo(""); //for empty input after adding a task
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
         setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllDone = () => {
     setTodos((Todos) => 
        Todos.map((todo) => {
        return {
            ...todo, 
            isDone: true,
        };
    })
)
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
         prevTodos.map((todo) => {
            if(todo.id == id) {
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }
         })
       );
    };

    return(
        <div>
            <h2>Todo List</h2>
            <input placeholder="add a task" value={newTodo} 
            onChange={updateTodoValue}></input>
            <br /><br />
            <button className="add" onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr />
            {/* <h3>Todo List</h3> */}
            <ul>
                {
                 todos.map((todo) => (
                    <li key={todo.id}>
                        <span className="complete" style={todo.isDone ? { textDecorationLine: "line-through", color: "red" } : {}}> 
                             {todo.task} 
                             </span>
                        &nbsp; &nbsp;
                        <button className="add" onClick={ () => deleteTodo(todo.id)}>delete</button>
                        &nbsp;
                        <button className="done" onClick={ () => markAsDone(todo.id)}>Done</button>

                        </li>
                 ))}
            </ul>
            <br /><br />
            <button onClick={markAllDone}>mark All done</button>
        </div>
    )
}