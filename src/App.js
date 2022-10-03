import React from 'react'
import { Feed, Navbar, Rightbar, Sidebar } from './components'
import { Box, Stack } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Add from './components/Add';

const App = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        {open && (<Sidebar setOpen={setOpen} />)}
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
  )
}

export default App