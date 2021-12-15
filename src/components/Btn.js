
import './btn.css'

export default function Btn(props) {

  return (
    <div className="btn-container">
    <button onClick={props.action} className= {props.type}>Start Quiz</button>
    </div>
  )
}