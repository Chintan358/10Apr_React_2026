import { Outlet } from "react-router-dom"
import { Container } from "./components/Container"
import { Home } from "./components/Home"
import { Shop } from "./components/Shop"

const App = () => {
  return <>


    <Container>
      <Outlet />
    </Container>

  </>
}

export default App