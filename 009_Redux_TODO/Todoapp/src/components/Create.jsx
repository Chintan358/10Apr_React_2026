import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../features/todo/todoSlice'

const Create = () => {



    const dispatch = useDispatch()

    const task = useRef()
    const priority = useRef()
    const date = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            "task": task.current.value,
            "priority": priority.current.value,
            "date": date.current.value
        }


        dispatch(create(data))

        task.current.value = ""
        priority.current.value = ""
        date.current.value = ""
    }

    return (
        <form onSubmit={submitHandler}>

            <div class="row g-3">

                <div class="col-md-8">
                    <label class="form-label">Task Name</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your task"
                        name="task" ref={task} />
                </div>

                <div class="col-md-4">
                    <label class="form-label">Priority</label>
                    <select class="form-select" name="priority" ref={priority}>
                        <option selected>Select</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>



                <div class="col-md-4">
                    <label class="form-label">Due Date</label>
                    <input
                        type="date"
                        class="form-control"
                        name="duedate" ref={date} />
                </div>

                <div class="col-md-8 d-grid align-self-end">
                    <button class="btn btn-success mt-4" type='submit'>
                        Add Task
                    </button>
                </div>

            </div>

        </form>

    )
}

export default Create