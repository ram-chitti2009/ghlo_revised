import { useState } from 'react'
import TitlePage from './components/TitlePage'
import MainSite from './components/MainSite'

function App() {
  const [showMainSite, setShowMainSite] = useState(false)

  return (
    <div className="font-sans text-gray-800">
      {!showMainSite ? (
        <TitlePage onEnterSite={() => setShowMainSite(true)} />
      ) : (
        <MainSite />
      )}
    </div>
  )
}

export default App