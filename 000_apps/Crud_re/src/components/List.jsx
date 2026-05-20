

export const List = ({ ele, deleteStudent, editStudent }) => {
    return <tr>

        <td>{ele.name}</td>
        <td>{ele.email}</td>
        <td>{ele.phone}</td>

        <td>
            <button className="btn btn-warning btn-sm btn-action" onClick={() => editStudent(ele.name)}>
                Edit
            </button>
        </td>

        <td>
            <button className="btn btn-danger btn-sm btn-action" onClick={() => deleteStudent(ele.name)}>
                Delete
            </button>
        </td>
    </tr>

}