import React, { useState, useContext, useEffect } from 'react';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { FeedContext } from '../../App';
import RSSParser from 'rss-parser';
import DeleteIcon from '@mui/icons-material/Delete'

const useRSSRegister = () => {
  const [newFeedUrl, setNewFeedUrl] = useState('');
  const { rssFeedUrls, setRssFeedUrls } = useContext(FeedContext);
  const [rssFeedTitles, setRssFeedTitles] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchTitles = async () => {
      const parser = new RSSParser();
      const titles: Record<string, string> = {};

      for (const feed of rssFeedUrls) {
        try {
          const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feed.url)}`);
          const data = await response.json();
          const feedData = await parser.parseString(data.contents);
          titles[feed.url] = feedData.title || 'No Title';
        } catch (error) {
          console.error(`Failed to fetch title for URL: ${feed.url}`, error);
          titles[feed.url] = 'No Title';
        }
      }
      setRssFeedTitles(titles);
    };

    fetchTitles();
  }, [rssFeedUrls]);

  const handleAddFeed = async () => {
    if (newFeedUrl && !rssFeedUrls.some(feed => feed.url === newFeedUrl)) {
      const parser = new RSSParser();
      let feedTitle = 'No Title';
      try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(newFeedUrl)}`);
        const data = await response.json();
        const feedData = await parser.parseString(data.contents);
        feedTitle = feedData.title || 'No Title';
      } catch (error) {
        console.error(`Failed to fetch title for URL: ${newFeedUrl}`, error);
      }
      const updatedFeeds = [...rssFeedUrls, { url: newFeedUrl, name: feedTitle }];
      setRssFeedUrls(updatedFeeds);
      localStorage.setItem('rssFeeds', JSON.stringify(updatedFeeds));
      setNewFeedUrl('');
    }
  };
  const handleDeleteFeed = (url: string) => {
    const updatedFeeds = rssFeedUrls.filter(feed => feed.url !== url);
    setRssFeedUrls(updatedFeeds);
    localStorage.setItem('rssFeeds', JSON.stringify(updatedFeeds));
  };

return (
  <Container>
    <Typography variant="h4" component="h1" gutterBottom>
      Register RSS Feed
    </Typography>
    <TextField
      label="RSS feed URL"
      variant="outlined"
      value={newFeedUrl}
      onChange={(e) => setNewFeedUrl(e.target.value)}
      fullWidth
      margin="normal"
    />
    <Button variant="contained" color="primary" onClick={handleAddFeed} fullWidth style={{ marginTop: '10px' }}>
      登録
    </Button>
    <Typography variant="h6" component="h2" gutterBottom style={{ marginTop: '20px' }}>
      Registered RSS Feeds
    </Typography>
    <List>
      {rssFeedUrls.map((feed, index) => (
        <ListItem key={index}>
          <ListItemText primary={rssFeedTitles[feed.url] || 'Loading...'} secondary={feed.url} />
          <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteFeed(feed.url)}>
              <DeleteIcon />
              </IconButton>
        </ListItem>
      ))}
    </List>
  </Container>
);
}

export default useRSSRegister;