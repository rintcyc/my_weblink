import React, { useEffect, useState } from 'react'
import RSSParser from 'rss-parser'
import {
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  Paper,
  TableHead,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material/'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const rssFeed = [
  { url: 'https://zenn.dev/nikaera/feed', name: 'Zenn' },
  { url: 'https://qiita.com/nikaera/feed', name: 'Qiita' },
  { url: 'https://note.com/tsujiharasaki/rss', name: 'Note' },
]

interface FeedItem {
  title?: string
  link?: string
  pubDate?: string
}

const RssFeed = () => {
  const parser = new RSSParser()
  const [feeds, setFeeds] = useState<Record<string, FeedItem[]>>({})

  useEffect(() => {
    const access_url = async () => {
      const allFeeds: Record<string, FeedItem[]> = {}

      for (const feedSource of rssFeed) {
        try {
          const response = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(feedSource.url)}`,
          )
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const data = await response.json()
          const feed = await parser.parseString(data.contents)

          if (feed && feed.items) {
            const items = feed.items.map(item => ({
              title: item.title,
              link: item.link,
              pubDate: item.pubDate
                ? new Date(item.pubDate)
                    .toLocaleString('ja-JP', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                    .replace(/\//g, '-')
                : '',
            }))
            allFeeds[feedSource.name] = items
          } else {
            console.error(
              `Failed to fetch or parse feed for URL: ${feedSource.url}`,
            )
          }
        } catch (error) {
          console.error(`Error fetching feed for URL: ${feedSource.url}`, error)
        }
      }

      setFeeds(allFeeds)
    }
    access_url()
  }, [])

  return (
    <>
      {Object.keys(feeds).map(feedName => (
        <Accordion key={feedName}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{feedName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>公開年月日</TableCell>
                    <TableCell>タイトル</TableCell>
                    <TableCell>サイト</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feeds[feedName].map((item, index) => (
                    <TableRow key={index}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {item.pubDate}
                      </TableCell>
                      <TableCell>
                        <a href={item.link}>{item.title}</a>
                      </TableCell>
                      <TableCell>{item.link}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}

export default RssFeed
