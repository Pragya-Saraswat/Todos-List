import React from 'react';
import TodoItem from './TodoItem';

export default function Todo(props) {
    let myStyle = {
        minHeight: "70vh",
        margin: "10px auto"
    };

    return (
        <div className='container' style={myStyle}>
            <h3 className='text-center my-3'>Todo-List</h3>

            {props.todos.length === 0 ? (
                "No todos to display"
            ) : (
                props.todos.map((todo) => (
                    <React.Fragment key={todo.sno}>  {/* Use React.Fragment with key */}
                        <TodoItem todos={todo} onDelete={props.onDelete} /> 
                        <hr />
                    </React.Fragment>
                ))
            )}
        </div>
    );
}
