import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const Store = createContext()

export const ContextProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState()
    const list = async () => {
        const resp = await axios.get("http://localhost:5000/users")
        setUsers(resp.data)
    }

    const create = async (data) => {
        const resp = await axios.post("http://localhost:5000/users", data)
        list()
    }

    const destroy = async (id) => {
        const resp = await axios.delete(`http://localhost:5000/users/${id}`)
        list()
    }

    const retrive = async (id) => {

        const user = users.find(ele => {
            if (ele.id == id) {
                return ele
            }
        })
        setUser(user)

    }

    const update = async (data, id) => {

        const resp = await axios.put(`http://localhost:5000/users/${id}`, data)
        setUser()
        list()

    }

    const search = async (q) => {
        // const resp = await axios.get(`http://localhost:5000/users?name=${q}`)
        if (!q) {
            list()
        }
        const filtereddata = users.filter(ele => {
            if (ele.name.toLowerCase().startsWith(q.toLowerCase()) || ele.email.toLowerCase().startsWith(q.toLowerCase()) || ele.phone.toLowerCase().startsWith(q.toLowerCase())) {
                return ele
            }
        })


        setUsers(filtereddata)
    }


    useEffect(() => {
        list()
    }, [])


    return <Store.Provider value={{ users, create, destroy, retrive, user, update, search }}>
        {children}
    </Store.Provider>

}