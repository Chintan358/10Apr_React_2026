import { useEffect } from "react"

export const Create = ({ addStudent, editstduent }) => {



    const submitHandler = (e) => {
        e.preventDefault()
        var data = {
            "username": e.target[0].value,
            "email": e.target[1].value,
            "phone": e.target[2].value
        }

        addStudent(data)
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""

    }

    useEffect(() => {
        alert("Hello")
    })

    return <div className="col-md-4">
        <div className="card shadow">
            <div className="card-header bg-primary text-white">
                Add User
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter phone" />
                    </div>

                    <button type="submit" className="btn btn-success w-100">Submit</button>
                </form>
            </div>
        </div>
    </div>

}