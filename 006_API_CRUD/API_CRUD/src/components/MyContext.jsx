import { createContext, useEffect, useState } from "react";


export const MyContext = createContext()

export const ContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch("https://6a1cf25dbcc4f20d5ca3b789.mockapi.io/products").then(resp => {
            return resp.json()
        }).then(result => {
            setProducts(result);

        })

    })



    return <MyContext.Provider value={{ products }}>
        {children}
    </MyContext.Provider>
}