import React from 'react'
import TodoItem from './TodoItem';

export default function Todo(props) {
    return (
        <div className='container'>
            <h3 className='text-center my-3'>Todo-List</h3>
            {props.todos.map((todos) => {
                return <TodoItem key={todos.sno} todos={todos} onDelete={props.onDelete} />

            })}

        </div>
    )
}
