
import React from 'react'

const MyApp = React.memo(({ name, clickHanle }) => {
    console.log("myapp calling");
    return (
        <button onClick={clickHanle} >{name}</button>
    )
})

export default MyApp