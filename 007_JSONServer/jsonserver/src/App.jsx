import React from 'react'
import Container from './components/Container'
import Create from './components/Create'
import Display from './components/Display'
import { ContextProvider } from './components/Store'

const App = () => {
  return (

    <ContextProvider>
    <Container>
      <Create />
      <Display />
    </Container>
    </ContextProvider>

  )
}

export default App