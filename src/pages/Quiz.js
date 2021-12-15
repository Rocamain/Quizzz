
import Btn from "../components/Btn.js"

export default function Quiz (props) {
console.log(props,"Quiz")
  return  (
    <div>
    <h1>Quiz Questions</h1>
      <Btn  action={props.start} type='hero-start-btn' />
    </div>
  )


}