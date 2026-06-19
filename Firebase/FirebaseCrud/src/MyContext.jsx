import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore'
import { db } from './firebaseconfig'


export const ContextProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState()

    const collectionRef = collection(db, "users")
    const getUsers = async () => {
        const data = await getDocs(collectionRef)
        var dt = []
        var c = 0
        data.docs.map((doc) => {
            const obj = {
                id: doc.id,
                name: doc.data().name,
                email: doc.data().email,
                age: doc.data().age
            }
            dt.push(obj)
        })
        setUsers(dt);
    }

    const addUser = async (data) => {

        await addDoc(collectionRef, data)
        getUsers()

    }

    const deleteUser = async (id) => {
        const user = await doc(db, "users", id)
        await deleteDoc(user)
        getUsers()

    }

    const retriveData = async (id) => {
        const ele = users.find(ele => {
            if (ele.id == id) {
                return ele
            }
        })

        setUser(ele)

    }

    const updateUser = async (data, id) => {

        const user = await doc(db, "users", id)
        await updateDoc(user, data)
        getUsers()
    }



    useEffect(() => {
        getUsers()
    }, [])

    return <MyContext.Provider value={{ users, addUser, deleteUser, user, retriveData, updateUser }}>
        {children}
    </MyContext.Provider>
}