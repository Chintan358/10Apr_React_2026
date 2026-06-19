import React, { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../MyContext'

const Create = () => {

    const { addUser, user, updateUser } = useContext(MyContext)



    const id = useRef()
    const name = useRef()
    const email = useRef()
    const age = useRef()

    useEffect(() => {

        if (user != undefined) {


            id.current.value = user.id
            name.current.value = user.name
            email.current.value = user.email
            age.current.value = user.age
        }

    }, [user])

    const submitHandler = (e) => {
        e.preventDefault()

        const uid = id.current.value
        const data = {
            name: name.current.value,
            email: email.current.value,
            age: age.current.value
        }

        if (uid) {
            updateUser(data, uid)
        }
        else {
            addUser(data)
        }

        name.current.value = ""
        email.current.value = ""
        age.current.value = ""

    }

    return (
        <div class="col-md-4">
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Student Form</h4>
                </div>

                <div class="card-body">
                    <form onSubmit={submitHandler}>

                        <input type="hidden" ref={id} />
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" ref={name} />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="Enter Email" ref={email} />
                        </div>



                        <div class="mb-3">
                            <label class="form-label">Age</label>
                            <input type="number" class="form-control" placeholder="Enter Age" ref={age} />
                        </div>

                        <div class="d-flex gap-2">
                            <button type="submit" class="btn btn-success">
                                Save
                            </button>

                            <button type="reset" class="btn btn-secondary">
                                Clear
                            </button>

                            <button type="button" class="btn btn-warning">
                                Update
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Create