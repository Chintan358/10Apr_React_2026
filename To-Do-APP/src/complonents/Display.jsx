import '../App.css'
import styles from './Display.module.css'
export const Display = ({ task, removetask }) => {


    return <>

        <table className='table'>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
            {task.map(ele => <tr key={ele}>
                <td>{ele}</td>
                <td><button onClick={() => removetask(ele)} className="btn btn-danger">Delete</button></td>
            </tr>)}

        </table>
    </>
}
