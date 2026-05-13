import 'bootstrap/dist/css/bootstrap.min.css'
import { Create } from './components/Create'
import { Display } from './components/Display'
import { useState } from 'react'
const App = () => {


  const [students, setStudents] = useState([])
  const [edit, setEdit] = useState({})
  const [tab, setTab] = useState("display")
  const [theme, setTheme] = useState("dark")

  const addStudent = (data) => {

    var duplicate = students.find(ele => {
      if (ele.name == data.name) {
        return ele
      }
    })

    console.log(duplicate);

    if (duplicate) {
      var newarray = students.filter(ele => {
        if (ele.name != duplicate.name) {
          return ele
        }
      })
      setStudents([...newarray, data])
      setEdit("")
      setTab("display")
    }
    else {
      setStudents([...students, data])
    }

  }

  const deleteStudent = (name) => {

    var newarray = students.filter(ele => {
      return ele.name != name
    })

    setStudents(newarray)
  }

  const editStudent = (name) => {

    setEdit(students.find(ele => {
      if (ele.name == name) {
        return ele
      }

    }))
    setTab("create")

  }



  return <div className={`container py-5 ${theme == 'dark' ? "bg-dark" : "bg-light"}`}>

    {theme == 'dark' ? <button onClick={() => setTheme("light")} className='btn btn-light'>Light</button> : <button onClick={() => setTheme("dark")} className='btn btn-dark  '>Dark</button>}

    <div className="text-center mb-4">
      <h2 className="title">Student Registration System</h2>
      <p className="text-muted">CRUD Operation UI Design</p>
    </div>



    {/* */}
    {tab == 'display' ? <Display students={students} deleteStudent={deleteStudent} editStudent={editStudent} setTab={setTab} /> : <Create addStudent={addStudent} edit={edit} setTab={setTab} />}





  </div>


}

export default App