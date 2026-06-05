import { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { MyContext } from "./MyContext"


export const Create = () => {

    const { CreateProduct, product, updateProduct } = useContext(MyContext)


    const id = useRef()
    const name = useRef()
    const price = useRef()
    const qty = useRef()




    useEffect(() => {
        if (product) {
            id.current.value = product.id
            name.current.value = product.name;
            price.current.value = product.price;
            qty.current.value = product.qty;
        }
    }, [product]);

    const submitHandler = (e) => {
        e.preventDefault()

        const pid = id.current.value
        const data = {
            "name": name.current.value,
            "price": price.current.value,
            "qty": qty.current.value
        }
        if (pid) {

            updateProduct(data, pid)
        }
        else {

            CreateProduct(data)
        }
        name.current.value = ""
        price.current.value = ""
        qty.current.value = ""

    }

    return <div class="card p-3 mb-4">
        <h4>Add Product</h4>

        <form onSubmit={submitHandler}>
            <input type="hidden" ref={id} />
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