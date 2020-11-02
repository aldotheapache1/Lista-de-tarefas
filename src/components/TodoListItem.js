import React from 'react';

const TodoListItem = (props) => {
    const onRemove = (todo) =>{ 
        var todos =  JSON.parse(localStorage.getItem('todos'));
        for (var prop in todos) {
            if(todos[prop].id == todo.id){
                todos.splice(prop, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
                window.location.reload();
            }
        }
    }
    const handleChange = (todo) =>{
        var todos =  JSON.parse(localStorage.getItem('todos'));
        for (var prop in todos) {
            if(todos[prop].id == todo.id){
                if(todos[prop].done == true){
                    todos[prop].done = false;
                }
                else{
                    todos[prop].done = true;
                }
                localStorage.setItem("todos", JSON.stringify(todos));
                window.location.reload();
            }
        }
    }
    return(
        <tr className="uk-animation-slide-bottom-medium" >
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox"
                        checked={props.todo.done} onClick={ () => handleChange(props.todo)}>
                    </input>
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger"
                uk-icon="trash" onClick={ () => onRemove(props.todo)}></button>
            </td>
        </tr>
    );
 }

export default TodoListItem;