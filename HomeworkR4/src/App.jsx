import { useState, useEffect} from 'react'
import Form from './components/Form'
import myPicture from './assets/IMG_9483.jpg'
import './App.css'

function App() {

    
    const [myRender, setMyRender] = useState(<Form myPicture={myPicture}></Form>)
  return (
    <>
    {myRender}

    </>
  )
}

export default App
