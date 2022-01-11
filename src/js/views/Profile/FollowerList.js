import { Button, Grid, Paper, Stack } from '@mui/material';
import React, { useMemo } from 'react';
import UserAvatarInfo from '../../common/components/UserAvatarInfo';
import styles from './profile.module.scss';

const TEMP = [
    { name: 'Jugal', designation: 'Developer' },
    { name: 'Jugal', designation: 'Developer' },
    { name: 'Jugal', designation: 'Developer' },
    { name: 'Jugal', designation: 'Developer' },
    { name: 'Jugal', designation: 'Developer' },
    { name: 'Jugal', designation: 'Developer' },
]
const FollowerList = () => {
    const comp = useMemo(() => TEMP.map((item, index) => {
        return <Grid item xs={6} md={4} key={item.name + index}>
            <Paper sx={{ p: 2 }}>
                <Stack direction='row' justifyContent='space-between'>
                    <UserAvatarInfo {...item} avatarSx={{ width: 50, height: 50, mr: 2 }} className={styles.follower} />
                    <Button variant='text'>Following</Button>
                </Stack>
            </Paper>
        </Grid>
    }), []);

    return (
        <Grid container spacing={2} flexWrap='wrap' sx={{ p: 2 }}>
            {comp}
        </Grid>
    )
}

export default FollowerList
