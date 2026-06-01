import { useRef } from "react"
import { Link } from "react-router-dom"


export const Create = () => {

    const name = useRef()
    const price = useRef()
    const qty = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const data = {
            "name": name.current.value,
            "price": price.current.value,
            "qty": qty.current.value
        }

        fetch("https://6a1cf25dbcc4f20d5ca3b789.mockapi.io/products", {
            method: 'POST', // 1. Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // 2. Tell the server to expect JSON
            },
            body: JSON.stringify(data) // 3. Stringify your data object into a text string
        });

    }

    return <div class="card p-3 mb-4">
        <h4>Add Product</h4>

        <form onSubmit={submitHandler}>
            <div class="mb-3">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Enter Product Name" ref={name} />
            </div>

            <div class="mb-3">
                <label>Price</label>
                <input type="number" class="form-control" placeholder="Enter Price" ref={price} />
            </div>

            <div class="mb-3">
                <label>Quantity</label>
                <input type="number" class="form-control" placeholder="Enter Quantity" ref={qty} />
            </div>

            <div class="form-group">

                <button type="submit" class="btn btn-primary">Save</button>
                <button type="reset" class="btn btn-secondary">Clear</button>
                <Link to="/" className="btn btn-primary">Display</Link>
            </div>
        </form>
    </div>
}