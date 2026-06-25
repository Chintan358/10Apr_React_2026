
import React from 'react'
import { ContextProvider } from '../MyContext'
import Container from './Container'
import Create from './Create'
import List from './List'

const Main = () => {
    return (

        <Container>
            <Create />
            <List />
        </Container>

    )
}

export default Main