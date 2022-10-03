import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
    return (
        <Card sx={{ margin: 5}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title="Beautiful Post"
                subheader="14 September, 2025"
            />
            <CardMedia
                component="img"
                height="350"
                image="https://source.unsplash.com/random"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive post is a perfect post and a fun post to post
                    together with your loved ones. Add 1 cup of posts along with the posts,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                </IconButton>
                <IconButton>
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post