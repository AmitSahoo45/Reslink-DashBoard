import { useState } from 'react'

import { Box, Button, Drawer, Typography } from '@mui/material'
import { Sidebar, TopBar, Header, Metric, Graphics, Footer } from '../components'
import './App.css'
import '../styles/Header.css'
import { Add } from '@mui/icons-material'

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = '80%';
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        position: 'relative'
      }}>

      {/* Sidebar for laptops and tablets */}
      <Box sx={{
        display: 'flex',
        flex: '0.25',
        ['@media (max-width: 768px)']: {
          display: 'none'
        }
      }}>
        <Sidebar />
      </Box>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: ['block', 'none', 'none', 'none'] }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: ['block', 'block', 'none', 'none'],
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          PaperProps={{ sx: { background: '#101215', color: '#FFFFFF' } }}>
          <Sidebar />
        </Drawer>
      </Box>


      <Box
        sx={{
          px: [2, 3, 4],
          py: [1, 2, 3],
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flex: '0.75',
          position: 'relative',
          ['@media (max-width: 768px)']: {
            flex: '1'
          }
        }}
      >
        <TopBar handleDrawerToggle={handleDrawerToggle} />

        {/* Header */}
        <Header />
        <Metric />
        <Graphics />
        <Footer />
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: '4rem', right: '2rem' }}>
        <Button
          sx={{
            borderRadius: '50%', display: 'flex', p: 2,
            justifyContent: 'center', alignItems: 'center',
            background: '#3FA268', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 25,
            border: '1px #3FA268 solid',
            display: ['block', 'block', 'none', 'none'], 
          }}
        >
          <Add sx={{ color: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', m: 0 }} />
        </Button>
      </Box>

    </Box>
  )
}

export default App
