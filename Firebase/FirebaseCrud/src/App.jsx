import { useContext } from "react"
import Container from "./components/Container"
import Create from "./components/Create"
import List from "./components/List"
import Login from "./components/Login"
import Main from "./components/Main"
import { ContextProvider, MyContext, useMyContext } from "./MyContext"
import { auth } from './authconfig'
import { onAuthStateChanged } from 'firebase/auth'

const App = () => {

  const { session, setSession } = useMyContext()
  onAuthStateChanged(auth, (user) => {


    if (user) {
      setSession(user)
    } else {
      setSession(null)
    }

  })


  console.log("session", session)
  return <>

    {session ? <Main /> : <Login />}


  </>

}

export default App



