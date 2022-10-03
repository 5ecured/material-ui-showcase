import { Fab, Modal, Tooltip, Typography, Box, styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon } from '@mui/icons-material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';


const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

const Add = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title='Add' sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 20 } }}>
                <Fab color='primary'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
            >
                <Box width={400} height={250} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' align='center'>
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src='https://source.unsplash.com/random'
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant='span'>
                            Doe John
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        multiline
                        rows={3}
                        placeholder="What's on your main?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <VideoCameraBackIcon color='secondary' />
                        <PersonAddIcon color='success' />
                        <ImageIcon color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained">
                        <Button>Post</Button>
                        <Button sx={{ width: '100px' }}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add