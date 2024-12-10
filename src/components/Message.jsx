// eslint-disable-next-line react/prop-types
const Message = ({ sender, text }) => {
    const messageClass =
        sender === "bot" ? "bg-teal-500 text-white" : "bg-gray-600 text-white";

    return (
        <div
            className={`mb-4 ${
                sender === "patient" ? "text-right" : "text-left"
            }`}
        >
            <p className="text-sm text-gray-400">
                {sender === "bot" ? "AURAFem" : "Patient"}
            </p>
            <p
                className={`inline-block p-4 rounded-xl max-w-[80%] ${messageClass}`}
            >
                {text}
            </p>
        </div>
    );
};

export default Message;
