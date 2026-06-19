// import Container from "./components/Container"
// import Create from "./components/Create"
// import List from "./components/List"
// import { ContextProvider } from "./MyContext"
// import { db } from './realtimeconfig'
// import { ref, push, set, onValue, update, remove } from 'firebase/database'

// const App = () => {

//   const createUser = () => {

//     const dbRef = ref(db, "students")
//     const refId = push(dbRef)
//     set(refId, {
//       "name": "Hasti",
//       "email": "hasti@gmail.com"
//     })

//   }

//   const viewUser = () => {

//     const userref = ref(db, "users")
//     onValue(userref, (snapshot) => {
//       const data = snapshot.val()
//       console.log(data);

//     })

//   }

//   const updateUser = () => {
//     const userRef = ref(db, "users/-OvSqCXquecK_53lUwMq")
//     update(userRef, {
//       name: "abc",
//       email: "abc@gmail.com"
//     })
//   }

//   const removeUser = () => {
//     const userRef = ref(db, "users/-OvSqCXquecK_53lUwMq")
//     remove(userRef)
//   }


//   return <>
//     <button onClick={createUser}>create user</button>
//     {/* <ContextProvider>
//       <Container>
//         <Create />
//         <List />
//       </Container>
//     </ContextProvider> */}
//   </>

// }

// export default App



//**************auth******************* */

import { useRef, useState } from 'react'
import { auth } from './authconfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

const App = () => {

  const [user, setUser] = useState(null);
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
      setUser(resp.user)
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
      setUser(resp.user)
      alert("login success")

    } catch (error) {
      alert(error)
    }


  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
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


    {user == null ? "" : <button onClick={logout}>signout</button>}
  </>
}

export default App