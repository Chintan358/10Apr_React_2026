import { Outlet } from "react-router-dom"
import { Container } from "./components/Container"
import { Create } from "./components/Create"
import { Display } from "./components/Display"
import { ContextProvider } from "./components/MyContext"

const App = () => {

  return <ContextProvider>
    <Container>
      <Outlet />
    </Container>
  </ContextProvider>
}

export default App