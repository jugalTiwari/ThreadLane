import { Avatar, Box, Typography } from '@mui/material'
import React from 'react';

import defaultUser from '../../assets/001-man.svg';

function UserAvatarInfo({ img = defaultUser, name = '', designation = '', avatarCls, className = undefined, avatarSx = {}, infoSx = {} }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} className={className}>
            <Avatar className={avatarCls} alt="Jugal" src={img} sx={{ height: 100, width: 100, ...avatarSx }} />
            <Box sx={{ ...infoSx }}>
                <Typography sx={{ fontWeight: 600, fontSize: 18 }}>{name}</Typography>
                <Typography sx={{ fontSize: 12, color: 'rgb(148, 164, 196)' }}>{designation}</Typography>
            </Box>
        </Box>
    )
}


export default UserAvatarInfo;
