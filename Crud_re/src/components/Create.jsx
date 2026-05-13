import { useEffect, useRef } from "react"

export const Create = ({ addStudent, edit, setTab }) => {

    const name = useRef()
    const email = useRef()
    const phone = useRef()

    useEffect(() => {

        if (edit.name !== undefined) {
            name.current.value = edit.name
            email.current.value = edit.email
            phone.current.value = edit.phone
        }

    })


    const submitHandler = (e) => {
        e.preventDefault()
        var data = {
            "name": name.current.value,
            "email": email.current.value,
            "phone": phone.current.value

        }
        addStudent(data)
        name.current.value = ""
        email.current.value = ""
        phone.current.value = ""
    }

    return <div className="col-lg-4 mx-auto">
        <div className="card main-card p-4">
            <h4 className="mb-4 text-primary">Add Student</h4>

            <form onSubmit={submitHandler}>

                <div className="mb-3">
                    <label className="form-label">Student Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter student name"
                        ref={name}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        ref={email}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
                        ref={phone}
                    />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                        Add Student
                    </button>

                    <button type="reset" className="btn btn-secondary" onClick={() => setTab("display")}>
                        View Stduents
                    </button>
                </div>

            </form>
        </div>
    </div>


}