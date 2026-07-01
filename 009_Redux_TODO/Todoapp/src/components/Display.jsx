import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../features/todo/todoSlice'

const Display = () => {


    const todo = useSelector((state) => state.todo)
    const dispatch = useDispatch()


    return (
        <table class="table table-bordered table-hover align-middle">

            <thead class="table-dark">
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th width="120">Action</th>
                </tr>
            </thead>

            <tbody>

                {todo.map((ele, index) => <tr>
                    <td>{index + 1}</td>
                    <td>{ele.task}</td>
                    <td>
                        <span class="badge bg-danger">
                            {ele.priority}
                        </span>
                    </td>
                    <td>{ele.date}</td>
                    <td>
                        <button class="btn btn-sm btn-danger" onClick={() => dispatch(remove(ele.task))}>
                            Remove
                        </button>
                    </td>
                </tr>

                )}


            </tbody>

        </table>
    )
}

export default Display