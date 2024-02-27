import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ChatSidebar from "@/Components/Chat/ChatSidebar";
import ChatUserInfoHeader from '@/Components/Chat/ChatUserInfoHeader';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatInput from '@/Components/Chat/ChatInput';

export default function Chat(props) {
    return (
            <div className="messanger bg-slate-300">
                <div className="flex">
                    <div className="w-2/6 border-r border-slate-100 bg-white pt-3">
                        <ChatSidebar recentMessages={props.recentMessages} />   
                    </div>

                    <div className="w-4/6">
                        {
                            props.receiver?.id ? (
                                <>
                                    <div class="w-full">
                                    <ChatUserInfoHeader receiver={props.receiver}/>
                                    </div>
                                    <div className="messanger mt-28 pr-1 pl-1">
                                            <ChatMessages messages={props.messages} auth_id={props.auth?.user?.id}/>
                                        <ChatInput receiver={props.receiver}/>
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-center items-center bg-slate-100 h-screen">
                                    <p className='font-bold text-3xl text-gray-500'>
                                        Please select a User to start chatting...
                                    </p>
                                </div>
                            )}
                    </div>

                </div>
            </div>
    );
}

