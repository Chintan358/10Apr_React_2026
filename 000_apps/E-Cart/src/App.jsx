import 'bootstrap/dist/css/bootstrap.min.css'
import { Title } from './componants/Title'
import { Create } from './componants/Create'
import { Display } from './componants/Display'
import { Error } from './componants/Error'
import { useState } from 'react'
import { Container } from './componants/Container'

const App = () => {

  var [product, setProduct] = useState([])

  const addProduct = (name) => {
    var newArray = [...product, name]
    setProduct(newArray)
  }

  const removeProduct = (name) => {

    var newArray = product.filter(ele => {
      return ele != name
    })
    setProduct(newArray)

  }

  return <>
    <div className='container'>

      <Container>
        <Title />
        <hr />
        <Create addProduct={addProduct} />
        <br />
        {product.length > 0 ? <Display product={product} removeProduct={removeProduct} /> : <Error />}
      </Container>
      <Container>
      <h2>Product details</h2>
      </Container>
    </div>
  </>
}

export default App