import { List } from "./List"

export const Display = ({ students, deleteStudent, editStudent, setTab }) => {
    return <div className="col-lg-8 mx-auto">
        <div className="card main-card p-4">

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-success">Student Records</h4>

                <button type="reset" className="btn btn-secondary" onClick={() => setTab("create")}>
                    Add Student
                </button>
            </div>

            <div className="table-responsive table-container">

                <table className="table table-bordered table-hover align-middle text-center">

                    <thead className="table-dark">
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th colspan="2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {students.map(ele =>
                            <List ele={ele} deleteStudent={deleteStudent} editStudent={editStudent} />
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    </div>
}