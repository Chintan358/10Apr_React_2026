

export const Display = ({ task }) => {
    console.log(task);
    
    return <>
        <table>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
            {task.map(ele=> <tr>
                <td>{ele}</td>
                <td>delete</td>
            </tr>)}
           
        </table>
    </>
}
