import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { setPrimaryColor, toggleDarkMode } from '../store/settingsSlice'
import { useEffect } from 'react'

export default function Settings() {
   const dispatch = useDispatch()
   const { primaryColor, darkMode } = useSelector((state: RootState) => state.settings)

   // Update CSS variable when primary color changes
   useEffect(() => {
      document.documentElement.style.setProperty('--primary-color', primaryColor)
   }, [primaryColor])

   // Update dark mode class on body
   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [darkMode])

   return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
         <h2 className="text-xl font-bold mb-4 dark:text-white">Settings</h2>

         <div className="space-y-4">
            <div>
               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Primary Color
               </label>
               <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => dispatch(setPrimaryColor(e.target.value))}
                  className="h-10 w-20"
               />
            </div>

            <div>
               <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                     type="checkbox"
                     checked={darkMode}
                     onChange={() => dispatch(toggleDarkMode())}
                     className="form-checkbox h-5 w-5"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                     Dark Mode
                  </span>
               </label>
            </div>
         </div>
      </div>
   )
}
