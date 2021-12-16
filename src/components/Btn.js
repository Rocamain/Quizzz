import './Btn.css';

export default function Btn(props) {
  return (
    <div className="btn-container">
      <button onClick={props.action} className={props.type}>
        {props.value}
      </button>
    </div>
  );
}
