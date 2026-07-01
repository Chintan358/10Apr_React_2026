import { useSelector } from "react-redux"
import Create from "./components/Create"
import Display from "./components/Display"

const App = () => {

  const todo = useSelector((state) => state.todo)
  return <>
    <div class="container py-5">

      <div class="row justify-content-center">

        <div class="col-lg-7 col-md-9">

          <div class="card shadow-lg border-0">

            <div class="card-header bg-primary text-white text-center">
              <h2 class="mb-0">📝 Todo Application</h2>
            </div>

            <div class="card-body">

              <Create />

              <hr class="my-4" />


              <h4 class="mb-3">Task List</h4>

              <Display />

            </div>

            <div class="card-footer text-center text-muted">
              Total Tasks : <strong>{todo.length}</strong>
            </div>

          </div>

        </div>

      </div>

    </div>


  </>
}


export default App