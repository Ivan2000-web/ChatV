import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ChatSidebar from "@/Components/Chat/ChatSidebar";
import ChatUserInfoHeader from '@/Components/Chat/ChatUserInfoHeader';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatInput from '@/Components/Chat/ChatInput';

export default function Chat(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<></>}
        >
            <div className="messanger h-screen overflow-hidden bg-sky-500 p-4">
                <div className="flex">
                    <div className="basis-2/6 border-r border-slate-100 bg-white pt-3">
                        <ChatSidebar />
                    </div>

                    <div className="basis-4/6">
                        <ChatUserInfoHeader />
                        <div className="messanger mt-4">
                            <div className="px-4">
                                <ChatMessages />
                            </div>
                            <ChatInput />
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
