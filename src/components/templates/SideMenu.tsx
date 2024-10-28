import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive'
import TableViewIcon from '@mui/icons-material/TableView'

const SideMenu: React.FC = () => {
  return (
    <>
      <List component="nav">
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <RssFeedIcon />
          </ListItemIcon>
          <ListItemText primary="RSS一覧" />
        </ListItemButton>
        <ListItemButton component="a" href="/register">
          <ListItemIcon>
            <SendAndArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="RSS登録" />
        </ListItemButton>
        {/*        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="menu2" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="menu3" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="menu4" />
        </ListItemButton>}
*/}
      </List>
    </>
  )
}
export default SideMenu
