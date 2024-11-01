import { Paper, TableContainer } from '@mui/material/'
import Layout from '../templates/Layout'
import RssRegister from './useRSSRegister'

const RegisterPage: React.FC = () => {
  return (
    <Layout title="RSS登録">
      <TableContainer component={Paper}>
        <RssRegister />
      </TableContainer>
    </Layout>
  )
}

export default RegisterPage
