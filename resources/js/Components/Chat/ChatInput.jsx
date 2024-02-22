export default function ChatInput () {
    return (
        <div className="fixed bottom-0 w-full bg-gray-100 pl-4">
            <textarea className="h-12 w-full overflow-y-auto bg-gray-100 pt-3 font-light border-0 hover:border-0 focus:border-0 focus:ring-0 !shadow-none focus:!outline-none" placeholder="Write a message"></textarea>
        </div>
    )
}