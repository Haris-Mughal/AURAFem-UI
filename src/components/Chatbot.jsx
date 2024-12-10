import { useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hello! I'm AURAFem, how can I assist you today?",
        },
    ]);

    const handleSendMessage = (text) => {
        setMessages([
            ...messages,
            { sender: "patient", text },
            {
                sender: "bot",
                text: "I'm sorry to hear that. Let's see what we can do about it. Can you tell me more about your symptoms?",
            },
        ]);
    };

    return (
        <div className="w-full h-[100vh] flex flex-col bg-secondary text-white">
            <div className="flex-1 p-6 overflow-y-auto">
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        sender={message.sender}
                        text={message.text}
                    />
                ))}
            </div>
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default Chatbot;
