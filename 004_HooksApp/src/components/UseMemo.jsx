import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(0)
    const [n, setn] = useState(0)

    const expansive = (a) => {
        for (var i = 0; i <= 1000000000; i++) { }
        console.log("calling");
        a = a + 1
        return a
    }

     var k = useMemo(() => expansive(n), [n])
   // var k = expansive(n)

    return (
        <>
            <input type="text" onChange={(e) => setn(e.target.value)} />
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <br></br>
            <span>{count}</span>
        </>
    )
}

export default UseMemo