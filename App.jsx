import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Black from './Component/Black/Black'
import Programs from './Component/Programs/Programs'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Black/>
      <div className="container">
        <Programs/>
      </div>

    </div>  
  )
}

export default App
