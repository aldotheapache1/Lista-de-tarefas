import React from 'react';

import Todo from './Models/Todo';

const Add = () => {
    const AddTodo = (e) => {
        e.preventDefault(); 
        var title = e.target.elements.title.value;
        
        var todos =  JSON.parse(localStorage.getItem('todos'));
        if(todos != null){
            for (var prop in todos) {
                var id = todos[prop].id;
                id = parseInt(id) + 1;
            }
        }
        else{
            todos = [];
            id = 1;
        }
       
        var todo = new Todo(id, title,false);
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        window.location.href = "/";
      }
    return (
        <form onSubmit={AddTodo}>
            <h4>Nova tarefa</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="Nova tarefa..." className="uk-input" />
                <span><small><strong className="uk-text-danger"></strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );

}

export default Add;