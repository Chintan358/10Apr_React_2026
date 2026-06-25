import { useRef, useState } from 'react'
import { auth } from '../authconfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useContext } from 'react'
import { MyContext } from '../MyContext'

const Login = () => {

    const { session, setSession } = useContext(MyContext)

    const email = useRef()
    const pass = useRef()
    const createUser = async (e) => {

        e.preventDefault()
        try {
            const resp = await createUserWithEmailAndPassword(
                auth,
                email.current.value,
                pass.current.value
            )
            setSession(resp.user)
            alert("registration success")
        } catch (error) {
            alert(error)
        }


    }

    const loginuser = async (e) => {

        e.preventDefault()
        try {
            const resp = await signInWithEmailAndPassword(
                auth,
                email.current.value,
                pass.current.value
            )
            setSession(resp.user)
            alert("login success")

        } catch (error) {
            alert(error)
        }


    }



    return <>
        <h1>Registration</h1>
        <form onSubmit={createUser}>
            <input type="text" name='email' ref={email} placeholder='Enter email' />
            <input type="text" name='pass' ref={pass} placeholder='Enter Password' />
            <input type="submit" />
        </form>

        <h1>Login</h1>
        <form onSubmit={loginuser}>
            <input type="text" name='email' ref={email} placeholder='Enter email' />
            <input type="text" name='pass' ref={pass} placeholder='Enter Password' />
            <input type="submit" />
        </form>


        {session ? <button onClick={logout}>signout</button> : ""}
    </>



}

export default Login