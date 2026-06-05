import React from 'react'

const Create = () => {
    return (
        <div class="col-md-4">
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h4>Add User</h4>
                </div>

                <div class="card-body">
                    <form id="userForm">

                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" id="name" class="form-control" required />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" id="email" class="form-control" required />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" id="phone" class="form-control" required />
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