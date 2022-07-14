import React from 'react'
// import Header from './components/header'
import Body from './components/body'
import './css/app.css'

class App extends React.Component {
     render(){
          return(
               <div>
                    {/* <div className=' coolhead'>
                    <Header />
                    </div> */}
                 
                 <Body />
               </div>
          )
     }
}

export default App