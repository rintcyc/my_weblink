import { Paper, TableContainer } from '@mui/material/'
import Layout from '../templates/Layout'
import RssRegister from './useRSSRegister'

const RegisterPage: React.FC = () => {
  return (
    <Layout title="RSS一覧">
      <TableContainer component={Paper}>
        <RssRegister />
      </TableContainer>
    </Layout>
  )
}

export default RegisterPage
