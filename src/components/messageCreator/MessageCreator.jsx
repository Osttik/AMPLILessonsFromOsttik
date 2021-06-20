import { sendUserMessage } from '../../chat/ChatResolver';

import './styles.css';

export default function MessageCreator(props) {

    return (
        <div className="messageCreator">
            <div className="messageArea">
                <textarea className="messageArea"/>
            </div>
            <div className="nickWithButtonForm">
                <input />
                <button onClick={() => sendUserMessage({Name: "I", Message: "A text"})}>
                    Send
                </button>
            </div>
        </div>
    )
}