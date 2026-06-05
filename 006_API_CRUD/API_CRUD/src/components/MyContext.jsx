import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const MyContext = createContext()

export const ContextProvider = ({ children }) => {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState()


    const getProducts = async () => {

        const API_URL = "https://6a1cf25dbcc4f20d5ca3b789.mockapi.io/products"
        const resp = await fetch(API_URL);
        const result = await resp.json();
        setProducts(result);
    };


    const CreateProduct = async (data) => {

        const resp = await fetch("https://6a1cf25dbcc4f20d5ca3b789.mockapi.io/products", {
            method: 'POST', // 1. Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // 2. Tell the server to expect JSON
            },
            body: JSON.stringify(data) // 3. Stringify your data object into a text string

        });
        getProducts()
    }

    const deleteProduct = async (id) => {
        const resp = await fetch(`https://6a1cf25dbcc4f20d5ca3b789.mockapi.io/products/${id}`, {
            method: 'DELETE', // 1. Specify the HTTP method
        });
        getProducts()
    }

    const editProduct = (id) => {


        const product = products.find(ele => {
            if (ele.id == id) {
                return ele
            }
        })
        setProduct(product)
        navigate("/create")


    }

    const updateProduct =async (data, id) => {

        const resp = await fetch(`https://6a1cf25dbcc4f20d5ca3b789.mockapi.io/products/${id}`, {
            method: 'PUT', // 1. Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // 2. Tell the server to expect JSON
            },
            body: JSON.stringify(data) // 3. Stringify your data object into a text string
        });
        setProduct()
        getProducts()
    }

    useEffect(() => {

        getProducts()
    }, [])



    return <MyContext.Provider value={{ products, product, CreateProduct, deleteProduct, editProduct, updateProduct }}>
        {children}
    </MyContext.Provider>
}