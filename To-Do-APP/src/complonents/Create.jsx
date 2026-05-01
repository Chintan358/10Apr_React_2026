import { useState } from "react";
import styles from './Create.module.css'

export const Create = ({ addtask }) => {

    var [data, setdata] = useState()

    const SetDataHandler = (e) => {
        setdata(e.target.value)

    }

    const addtaskHandler = (e) => {
        e.preventDefault()
        addtask(data)

    }

    return <>
        <form action="">
            <div>
                <input type="text" name="todo" id="todo" onChange={SetDataHandler} style={{ color: "red" }} className="form-control" />
                <br />
                <button onClick={addtaskHandler} className="btn 
                btn-success">Submit</button>
            </div>
        </form >
    </>

}