import { useEffect, useState } from 'react';
import MessageCreator from '../messageCreator/MessageCreator';
import Message from '../message/Message';

import { start } from '../../chat/ChatResolver';

import './styles.css';

export default function Chat() {
    const [messages, changeMessages] = useState([])

    useEffect(() => {
        start(handleAddMessage, "koo")
    }, [])

    const handleAddMessage = (data) => {
        console.log(data)
        changeMessages([...data])
    }

    return (
        <div>
            {
                messages.map(item => (
                    <Message 
                        name={item.Name}
                        text={item.Message}
                        date={"2021.06.20 17:20:36"}
                    />
                ))
            }
            <MessageCreator />
        </div>
    )
}