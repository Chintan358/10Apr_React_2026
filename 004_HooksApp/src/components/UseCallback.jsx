import React, { useCallback, useEffect, useRef, useState } from 'react'
import MyApp from './MyApp'

const UseCallback = () => {

    const [count, setCount] = useState(0)

    const clickHanle = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    // const clickHanle = () => {
    //     setCount(prev => prev + 1)
    // }


    // useEffect(() => {
    //     clickHanle = useRef(null)
    //     console.log(clickHanle.current);



    // }, [])

    return (
        <>
            <h1 className='text-red-900'>Use Callback</h1>
            <button onClick={clickHanle} >Increment</button>
            <br />
            <span>{count}</span>
            <br />
            <MyApp name="clickme1" clickHanle={clickHanle} ></MyApp>
        </>
    )
}

export default UseCallback