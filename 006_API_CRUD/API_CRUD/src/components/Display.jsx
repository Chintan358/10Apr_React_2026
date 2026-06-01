import { useContext } from "react"
import { Link } from "react-router-dom"
import { MyContext } from "./MyContext"

export const Display = () => {

    const { products } = useContext(MyContext)

    const deleteHandler = (id) => {

        fetch(`https://6a1cf25dbcc4f20d5ca3b789.mockapi.io/products/${id}`, {
            method: 'DELETE', // 1. Specify the HTTP method
        });
    }

    return <div class="card p-3">
        <h4> Product List <span><Link to="create" className="btn btn-success">ADD</Link></span></h4>

        <table class="table table-bordered table-striped">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>

            <tbody>

                {products.map(ele => <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.price}</td>
                    <td>{ele.qty}</td>
                    <td>
                        <button class="btn btn-warning btn-sm">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-sm" onClick={() => deleteHandler(ele.id)}>Delete</button>
                    </td>
                </tr>)}

            </tbody>

        </table>
    </div>
}