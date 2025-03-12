import React from 'react'

export default function AddTodo(props) {
   
    return (

        <div className='container'>
            <h3 className='text-center my-3'>Add Todos</h3>
            <form onSubmit={props.submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={props.title} onChange={(e) => props.setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={props.desc} onChange={(e) => props.setDesc(e.target.value)} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
