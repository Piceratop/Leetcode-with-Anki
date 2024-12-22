import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function Home() {
   const { primaryColor } = useSelector((state: RootState) => state.settings)

   return (
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold mb-4 display-text" style={{ color: primaryColor }}>
            Welcome to LeetCode Anki
         </h1>
         <p className="display-text">
            Master your coding interview preparation with spaced repetition learning.
         </p>
      </div>
   )
}
