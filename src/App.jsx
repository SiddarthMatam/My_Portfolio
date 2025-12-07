import {Routes,Route} from 'react-router-dom'
import Todo from './TodoComponent/Todo.jsx'
import Calculator from './CalculatorComponent/Calculator.jsx'
import Counter from './CounterComponent/Counter.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'
// import MyProject from './MyProjects.jsx'
import About from './About.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      {/* <Route path="/myprojects" element={<MyProject/>}/> */}
      <Route path="/calculator" element={<Calculator/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App