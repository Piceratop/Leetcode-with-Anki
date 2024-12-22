import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function Stats() {
   const { primaryColor } = useSelector((state: RootState) => state.settings)

   return (
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold mb-4 dark:text-white" style={{ color: primaryColor }}>
            Your Progress
         </h1>
         <div className="grid gap-4">{/* Statistics and charts will go here */}</div>
      </div>
   )
}
