import React from 'react';
import TodoListItem from './TodoListItem'

const TodoList = () => {  

    const todos =  JSON.parse(localStorage.getItem('todos'));

    return(
        <table className="uk-table">
            <caption>Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                   todos?.map(
                    todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                )
                }
            </tbody>
            
        </table>
    );

}

export default TodoList;