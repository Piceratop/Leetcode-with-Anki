import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Settings from './Settings'
import { useState } from 'react'

export default function Header() {
   const [showSettings, setShowSettings] = useState(false)
   const { primaryColor, darkMode } = useSelector((state: RootState) => state.settings)
   const location = useLocation()

   return (
      <header className={`dark:bg-gray-950 dark:text-white transition-colors duration-200`}>
         <nav className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
               <Link
                  to="/"
                  className="text-2xl font-bold hover:text-primary transition-colors duration-200"
                  style={{ color: primaryColor }}
               >
                  LeetCode Anki
               </Link>
               <div className="flex items-center space-x-4">
                  <Link
                     to="/problems"
                     className={`nav-text ${location.pathname === '/problems' ? 'text-primary' : ''}`}
                  >
                     Problems
                  </Link>
                  <Link
                     to="/flashcards"
                     className={`nav-text ${location.pathname === '/flashcards' ? 'text-primary' : ''}`}
                  >
                     Flashcards
                  </Link>
                  <Link
                     to="/stats"
                     className={`nav-text ${location.pathname === '/stats' ? 'text-primary' : ''}`}
                  >
                     Stats
                  </Link>
                  <button
                     onClick={() => setShowSettings(!showSettings)}
                     className={`p-2 rounded-full hover:text-primary transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800 ${showSettings ? 'text-primary' : ''}`}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </nav>

         {showSettings && (
            <div className={`absolute right-4 top-16 z-50`}>
               <Settings />
            </div>
         )}
      </header>
   )
}
