import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./features/counter/counterSlice"


const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return <>
    <button onClick={() => dispatch(increment())}>+</button>
    <span>{count}</span>
    <button onClick={() => dispatch(decrement())}>-</button>
    <input type="text" onChange={(e) => dispatch(incrementByAmount(e.target.value))} />
  </>
}

export default App