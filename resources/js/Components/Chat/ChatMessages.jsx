import { Fragment, useEffect, useRef } from "react";

export default function ChatMessages({ messages, auth_id }) {
    const isReceivedMessage = (message) => {
        return message.receiver_id === auth_id;
    };

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="flex flex-col">
            {(messages || []).map((message, index) => (
                <Fragment key={index}>
                    <div
                        className={`${
                            isReceivedMessage(message)
                                ? "receive-chat justify-start"
                                : "send-chat justify-end"
                        } flex`}
                    >
                        <div
                            className={`overflow-hidden mb-2 max-w-[80%] rounded ${
                                isReceivedMessage(message)
                                    ? "bg-gray-400"
                                    : "bg-gray-200"
                            } px-5 py-2 text-stone-800 ${
                                isReceivedMessage(message)
                            }`}
                            style={{ wordWrap: "break-word" }}
                        >
                            <p>{message?.message}</p>
                        </div>
                    </div>
                </Fragment>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}
