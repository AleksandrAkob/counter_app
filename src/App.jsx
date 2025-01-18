import CounterApp from './components/counter/CounterApp'
import {User, Products} from  './components/products/Products'
import {Student} from './components/students/Student'

import './App.css';

function App() {
  return (
      <div className="App">

      <User/>
      <Products/>
      <Student/>

      
        {/* <CounterApp/> */}
      </div>
  )
}

export default App;
