import React, { useState } from 'react'
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Avatar, Menu, MenuItem } from '@mui/material'
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '25px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: { //if bigger than sm
    display: 'flex'
  },
  '&:hover': {
    cursor: 'pointer'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: { //if bigger than sm
    display: 'none'
  },
  '&:hover': {
    cursor: 'pointer'
  }
}))



const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Material UI Showcase
        </Typography>

        <SportsTennisIcon sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Search>
          <InputBase placeholder='Search'></InputBase>
        </Search>

        <Icons>
          <Badge badgeContent='5' color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent='3' color='error'>
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src='https://source.unsplash.com/random' onClick={e => setOpen(true)} />
        </Icons>

        <UserBox onClick={e => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src='https://source.unsplash.com/random' />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar