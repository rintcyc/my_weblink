import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RSSViewPage from './components/pages/RSSViewPage'
import RSSRegistPage from './components/pages/RSSRegistPage'

interface FeedContextProps {
  rssFeedUrls: { url: string; name: string }[]
  setRssFeedUrls: Dispatch<SetStateAction<{ url: string; name: string }[]>>
}

export const FeedContext = createContext<FeedContextProps>({
  rssFeedUrls: [],
  setRssFeedUrls: () => [],
})

const App: React.FC = () => {
  const defaultFeeds = [
    { url: 'https://zenn.dev/feed', name: 'Zenn (サンプル)' },
    { url: 'https://note.com/rss', name: 'Note (サンプル)' },
  ]

  const [rssFeedUrls, setRssFeedUrls] = useState<
    { url: string; name: string }[]
  >(() => {
    try {
      const savedFeeds = localStorage.getItem('rssFeeds')
      const parsedFeeds = savedFeeds ? JSON.parse(savedFeeds) : []
      return parsedFeeds.length > 0 ? parsedFeeds : defaultFeeds
    } catch (error) {
      console.error('Error parsing localStorage data: ', error)
      return defaultFeeds
    }
  })

  useEffect(() => {
    localStorage.setItem('rssFeeds', JSON.stringify(rssFeedUrls))
  }, [rssFeedUrls])

  return (
    <FeedContext.Provider value={{ rssFeedUrls, setRssFeedUrls }}>
      <Router>
        <Routes>
          <Route path="/" element={<RSSViewPage />} />
          <Route path="/register" element={<RSSRegistPage />} />
        </Routes>
      </Router>
    </FeedContext.Provider>
  )
}

export default App
