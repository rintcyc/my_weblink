import React, { useState, useContext } from 'react'
import { TextField, Button, Container, Typography } from '@mui/material'
import { FeedContext } from '../../App'
import Layout from '../templates/Layout'

const RegisterPage = () => {
  const [newFeedUrl, setNewFeedUrl] = useState('')
  const { rssFeedUrls, setRssFeedUrls } = useContext(FeedContext)

  return (
    <Layout title="RSS登録">
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          RSSを登録する
        </Typography>
        <TextField
          label=""
          variant="outlined"
          value={newFeedUrl}
          onChange={e => setNewFeedUrl(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
        >
          登録
        </Button>
      </Container>
    </Layout>
  )
}

export default RegisterPage
