
import './App.css'
import Marks2Grades from './components/Marks2Grades'
import MaxOf3Numbers from './components/MaxOf3Numbers'
import Multipleof7 from './components/Multipleof7'

function App() {

  return (
    <>
   <MaxOf3Numbers num1={4} num2={7} num3={2} />
      <Multipleof7 num1={23} />
      <Marks2Grades marks={75} />
    </>
  )
}

export default App
