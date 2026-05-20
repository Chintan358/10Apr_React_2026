

export const Container = ({ children }) => {
    return <> <div className='row'>
        <div className='col-6 mx-auto card p-5 mt-3'>
            {children}
        </div>
    </div></>
}