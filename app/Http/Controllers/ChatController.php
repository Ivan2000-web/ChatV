<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repositories\ChatRepository;

class ChatController extends Controller
{
    public function __construct(private ChatRepository $chat) {
        $this->chat = $chat;
    }
    /**
     * Chat view.
     * @return \Inertia\Response
     */
    public function index(Request $request, ?int $receiverId = null)
    {
        $messages = empty($receiverId) ? [] : $this->chat->getUserMessages($request->user()->id, $receiverId);

        return Inertia::render('Chat/Chat', [
            'messages' => $messages,
        ]);
    }

    /**
     * Chat store.
     * @return \Inertia\Response
     */
    public function store(Request $request, ?int $receiverId = null)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        if (empty($receiverId)) {
            return;
        }

        try {
           $message =  $this->chat->sendMessage([
                'sender_id' => $request->user()->id,
                'receiver_id' => $receiverId,
                'message' => $request->message,
            ]);

            event(new MessageSent($message));

            return Redirect::route('chat.index', ['receiverId' => $receiverId]);
        } catch (\Throwable $th){
            return Redirect::route('chat.index', ['receiverId' => $receiverId]);
        }
        
    }
}
