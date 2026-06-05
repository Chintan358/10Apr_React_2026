import React, { useContext } from 'react'
import { Store } from './Store'

const Display = () => {

    const { users } = useContext(Store)

    return (
        <div class="col-md-8">
            <div class="card">
                <div class="card-header bg-dark text-white">
                    <h4>User List</h4>
                </div>

                <div class="card-body">
                    <table class="table table-bordered table-striped text-center">
                        <thead class="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>

                        <tbody id="userTable">

                            {users.map((ele,index)=>  <tr>
                                <td>{index+1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                            </tr>)}
                          

                           
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Display