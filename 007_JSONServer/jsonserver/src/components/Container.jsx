import React from 'react'

const Container = ({ children }) => {
    return (
        <div class="container-fluid mt-4">
            <div class="row">
                {children}
            </div>
        </div>

    )
}

export default Container