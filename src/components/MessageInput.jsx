import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MessageInput = ({ onSendMessage }) => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSend = () => {
        if (inputText.trim()) {
            onSendMessage(inputText);
            setInputText("");
        }
    };

    return (
        <div className="flex items-center p-4 bg-secondary border-t border-gray-600">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 p-3 rounded-lg border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
                onClick={handleSend}
                className="ml-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;
