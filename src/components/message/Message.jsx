import './styles.css';

export default function Message(props) {
    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.text}
            </div>
            <div>
                {props.date}
            </div>
        </div>
    )
}