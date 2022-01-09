import { Avatar, Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IosShareIcon from '@mui/icons-material/IosShare';

import defaultUser from '../../assets/001-man.svg';
import defaultPostImg from '../../assets/post-1.png';
import styles from './profile.module.scss'

const Caption = () => {
    return <Typography color='text.primary'>
        <small>Tempo</small>
    </Typography>
}
const PostContentCaption = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Caption />
            </Grid>
            <Grid item xs={12}>
                <img loading='lazy' src={defaultPostImg} className={styles.postImgSingle} />
            </Grid>
            <Grid item display='flex' xs={12} justifyContent='space-between' className={styles.postInteractions}>
                <div className={styles.flexCenter}>
                    <FavoriteIcon />
                    <Typography color='text.secondary'>
                        <small>130</small>
                    </Typography>
                </div>
                <div className={styles.flexCenter}>
                    <ChatBubbleIcon />
                    <Typography color='text.secondary'>
                        <small>130</small>
                    </Typography>
                </div>
                <div className={styles.flexCenter}>
                    <IosShareIcon />
                    <Typography color='text.secondary'>
                        <small>130</small>
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

const Post = (props) => {
    return (
        <Grid container direction='column' spacing={3} sx={{ p: 2 }}>
            <Grid item display='flex' alignItems='center' justifyContent='space-between'>
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Avatar
                        alt="Remy Sharp"
                        src={defaultUser}
                        sx={{ width: 45, height: 45 }}
                    />
                    <Box>
                        <Typography>Martha Hawk</Typography>
                        <Typography color='text.secondary' variant='subtitle2'>{new Date().toDateString()}</Typography>
                    </Box>
                </Stack>
                <Stack>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <PostContentCaption />
            </Grid>
        </Grid>
    )
}


function UserPosts() {
    return (
        <Box container spacing={2} direction='row'>
            <Post />
        </Box>
    )
}

export default UserPosts
