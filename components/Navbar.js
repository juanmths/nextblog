import Link from "next/link"

export default function Navbar() {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link href="/">
                        <a className="flex items-center">
                            {/* <img src="#" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BLOGNEXT</span>
                        </a>
                    </Link>
                <div className="flex items-center">
                    <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="inline-flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>                        </span>
                    </button>
                    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:opacity-50">Login</a>
                </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="py-3 px-6 mx-auto max-w-screen-xl">
                <div className="flex item-center">
                    <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="relative inline-flex items-center text-gray-900 dark:text-white hover:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-1 text-cyan-300" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                            Html
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">Css</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">Javascript</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">Bootstrap</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">Php</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">Laravel</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">Next JS</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">React JS</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">tailwind CSS</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:opacity-50">Flowbite</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}