import Footer from "./components/Footer"
import Header from "./components/Header"
import { Abc, Xyz } from "./components/Content"

const App = () => {

  const name = "Harshani"
  return <>
    <Header name={name} age={22} />
    <Abc />
    <Xyz />
    <Footer name={name} age={22} />
  </>

}


export default App