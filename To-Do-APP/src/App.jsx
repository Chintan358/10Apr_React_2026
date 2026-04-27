import { useState } from "react"
import { Create } from "./complonents/Create"
import { Display } from "./complonents/Display"

const App = () => {

  var [task, setTask] = useState(["abc","xyz","dsd","jj"])

  const addtask = ()=>{

  }
  return <>
    <h1>TODO APP</h1>
    <Create addtask={addtask} />
    <Display task={task} />

  </>
}

export default App