import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RSSViewPage from './components/pages/RSSViewPage'
import RSSRegistPage from './components/pages/RSSRegistPage'

export const FeedContext = createContext({
  rssFeedUrls: [],
  setRssFeedUrls: () => {},
})

const App: React.FC = () => {
  const [rssFeedUrls, setRssFeedUrls] = useState<string[]>(() => {
    try {
      const savedFeeds = localStorage.getItem('rssFeeds')
      return savedFeeds ? JSON.parse(savedFeeds) : []
    } catch (error) {
      console.error('Error parsing localStorage data: ', error)
      return []
    }
  })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RSSViewPage />} />
        <Route path="/register" element={<RSSRegistPage />} />
      </Routes>
    </Router>
  )
}

export default App
