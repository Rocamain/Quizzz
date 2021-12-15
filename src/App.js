
import './App.css';
import Hero from "./pages/Hero"
import Quiz from "./pages/Quiz"
import {useState} from "react"

function App() {
  const [isStarted, setIsStarted] = useState(false)

  function startQuiz  () {
    console.log("clicked")
  setIsStarted((prevState)=> !prevState)
  }

  return (
    <div className="App">
     {isStarted ?<Quiz start={startQuiz}/> : <Hero start={startQuiz}/>}
    </div>
  );
}

export default App;
