export default function ChatUserInfoHeader({ receiver }) {
    return (
        <div className="fixed top-0 w-full user-info-header bg-gray-50 px-5 py-3">
            <div className="flex justify-between">
                <div className="flex items-center">
                    {receiver?.avatar !== undefined ? (
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                            width="50"
                        />
                    ) : (
                        <i className="fa fa-user-circle text-gray-300 text-5xl"></i>
                    )}

                    <h3 className="text-md pl-4 text-black">
                        {receiver?.name}
                    </h3>
                </div>
                <div>
                    <i className="fa fa-message text-gray-400"></i>
                    <i className="fa fa-video ml-3 text-gray-300"></i>
                    <i className="fa fa-phone ml-3 text-gray-300"></i>
                </div>
            </div>
        </div>
    );
}