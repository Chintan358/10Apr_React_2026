import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

const List = () => {

    const { users, deleteUser, retriveData } = useContext(MyContext)

    return (
        <div class="col-md-8">
            <div class="card">
                <div class="card-header bg-dark text-white">
                    <h4 class="mb-0">Student List</h4>
                </div>

                <div class="card-body">

                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Search..." />
                    </div>

                    <div class="table-responsive">
                        <table class="table table-bordered table-hover align-middle">
                            <thead class="table-primary">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {users.map((ele, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>

                                    <td>{ele.age}</td>
                                    <td>
                                        <button class="btn btn-sm btn-warning" onClick={() => retriveData(ele.id)}>
                                            Edit
                                        </button>

                                        <button class="btn btn-sm btn-danger" onClick={() => deleteUser(ele.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>)}




                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default List