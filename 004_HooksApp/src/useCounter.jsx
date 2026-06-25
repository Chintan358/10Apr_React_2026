
import React, { useState } from 'react'

const useCounter = (n = 0) => {

    const [count, setCount] = useState(n)

    const increment = () => {
        setCount(prev => prev + 1)


    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const setDefault = () => {
        setCount(0)
    }

    return { count, increment, decrement }
}

export default useCounter