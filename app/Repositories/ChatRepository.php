<?php

namespace App\Repositories;
use App\Models\Message;
use Illuminate\Support\Facades\DB;


class ChatRepository {
    public function getUserMessages(int $sender_id, int $receiver_id) {
        return Message::whereIn('sender_id', [$sender_id, $receiver_id])
        ->whereIn('receiver_id', [$sender_id, $receiver_id])
        ->get();
    }

    public function sendMessages(array $data ) {
        return Message::create($data);
    }

    public function getRecentUsersWithMessage(int $sender_id) {
        DB::statement("SET SESSION sql_mode=''");
        $recentMessages = Message::where(function($query) use ($sender_id){
            $query->where('sender_id', $sender_id)
            ->orWhere('receiver_id', $sender_id);
        })->groupBy('sender_id', 'receiver_id')
        ->select('sender_id', 'receiver_id', 'message')
        ->limit(30)
        ->get();

        $recentUsersWithMessage = [];
        foreach ($recentMessages as $message) {
            $userId = $message->sender_id == $sender_id ? $message->receiver_id : $message->sender_id;
            if(!in_array($userId, $recentUsersWithMessage)) {
            
            $recentUsersWithMessage[] = [
                'user_id' => $userId,
                'message' => $message
            ]; 
          }
        }

        return $recentUsersWithMessage;
    }
}
