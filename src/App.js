import React from 'react'
import { Feed, Navbar, Rightbar, Sidebar } from './components'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Add from './components/Add';

const App = () => {
  const [open, setOpen] = React.useState(true)
  const [mode, setMode] = React.useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          {open && (<Sidebar setOpen={setOpen} setMode={setMode} mode={mode} />)}
          {!open &&
            <Box position='fixed'>
              <LockOpenIcon sx={{ '&:hover': { cursor: 'pointer' }, margin: 3 }} onClick={e => setOpen(true)} />
            </Box>
          }
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App