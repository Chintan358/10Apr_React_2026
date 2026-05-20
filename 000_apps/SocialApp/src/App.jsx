import 'bootstrap/dist/css/bootstrap.min.css'
import { Title } from './components/Title'
import { Nav } from './components/Nav'
import { Create } from './components/Create'
import { Display } from './components/Display'
import { useState } from 'react'
import { Container } from './components/Container'
const App = () => {

  const [tab, setTab] = useState("create")
  const [post, setPost] = useState([])

  const addPost = (data) => {
    setPost([...post, data])
  }

  const deletePost = (username) => {

    setPost(post.filter(ele => {
      if (ele.username != username) {
        return ele
      }
    }))
  }

  const addLikes = (username) => {

    const newArray = post.filter(ele => {
      if (ele.username == username) {
        ele.likes = ele.likes + 1
      }
      return ele
    })

    setPost(newArray);


  }

  return <><Container>
    <Title />
    <Nav setTab={setTab} tab={tab} />
    {tab == 'create' ? <Create addPost={addPost} /> : <Display post={post} deletePost={deletePost} addLikes={addLikes} />}
  </Container>
  </>


}

export default App