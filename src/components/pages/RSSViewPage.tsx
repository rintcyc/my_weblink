import { Paper, TableContainer } from '@mui/material/'
import Layout from '../templates/Layout'

import RssFeed from './useRSSFeed'

const HomePage: React.FC = () => {
  return (
    <Layout title="RSS一覧">
      <TableContainer component={Paper}>
        <RssFeed />
      </TableContainer>
    </Layout>
  )
}

export default HomePage
