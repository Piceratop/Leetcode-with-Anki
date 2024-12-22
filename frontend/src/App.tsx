import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import Header from './components/Header'
import Home from './pages/Home'
import Problems from './pages/Problems'
import Flashcards from './pages/Flashcards'
import Stats from './pages/Stats'

function AppContent() {
   const { darkMode } = useSelector((state: RootState) => state.settings)

   return (
      <Router>
         <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen dark:bg-gray-950 transition-colors duration-200">
               <Header />
               <main>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/problems" element={<Problems />} />
                     <Route path="/flashcards" element={<Flashcards />} />
                     <Route path="/stats" element={<Stats />} />
                  </Routes>
               </main>
            </div>
         </div>
      </Router>
   )
}

export default function App() {
   return (
      <Provider store={store}>
         <AppContent />
      </Provider>
   )
}
