import { Link } from '@inertiajs/react';
import logo from '/resources/images/logo.png';

export default function Welcome(props) {
    return (
                <div className="flex mt-8 overflow-hidden justify-center bg-black">
                    <div className='flex flex-col items-center bg-slate-100'>

                        <div className='logo'>
                            <img class="mb-4" src={logo} alt="Logo"/> 
                        </div>
                        
                        <div className='links'>
                            <Link
                                href={route('login')}
                                className="text-2xl font-serif text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="text-2xl ml-4 font-serif text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                            </div>

                    </div>
                </div>
                
    );
}
