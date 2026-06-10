import React, { useContext, useEffect, useRef } from 'react'
import { Store } from './Store'

const Create = () => {


    const { create, user, update } = useContext(Store)

    const id = useRef()
    const name = useRef()
    const email = useRef()
    const phone = useRef()

    useEffect(() => {

        if (user != undefined) {
            id.current.value = user.id
            name.current.value = user.name
            email.current.value = user.email
            phone.current.value = user.phone
        }


    }, [user])

    const submitHandler = (e) => {
        e.preventDefault()
        const uid = id.current.value
        const data = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value
        }

        if (uid) {
            update(data, uid)
        }
        else {
            create(data)
        }

        id.current.value = ""
        name.current.value = ""
        email.current.value = ""
        phone.current.value = ""
    }

    return (
        <div class="col-md-4">
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h4>Add User</h4>
                </div>

                <div class="card-body">
                    <form id="userForm" onSubmit={submitHandler}>
                        <input type="hidden" ref={id} />
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" id="name" class="form-control" ref={name} required />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" id="email" class="form-control" ref={email} required />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" id="phone" class="form-control" ref={phone} required />
                        </div>

                        <button type="submit" class="btn btn-success w-100">
                            Add User
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create