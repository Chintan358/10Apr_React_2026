import ContextProvider from "./components/Mycontext"
import UseCallback from "./components/UseCallback"
import { UseEffect } from "./components/UseEffect"
import UseMemo from "./components/UseMemo"
import { UseReducer } from "./components/UseReducer"
import { UseRef } from "./components/UseRef"
import { UseState } from "./components/UseState"
import useCounter from "./useCounter"

const App = () => {

  // const { count, increment, decrement } = useCounter()


  return <>

    {/* <button onClick={increment}>+</button>
    <span>{count}</span>
    <button onClick={decrement}>-</button> */}



    {/* <ContextProvider>
      <UseState />
      <hr />
      <UseRef />
      <hr />
      <UseEffect />
      <UseReducer />
    </ContextProvider> */}

    {/* <UseMemo /> */}
    <UseCallback />
  </>
}

export default App