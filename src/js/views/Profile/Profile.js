import React from "react";
import { Avatar, Box, Divider, Grid, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views';
import styles from "./profile.module.scss"
import userCover from '../../assets/user-cover-pic.png'
import defaultUser from '../../assets/001-man.svg';
import { BusinessCenterOutlined, CollectionsBookmarkOutlined, LocationOnOutlined, MailOutlined, PersonAddAlt, PersonOutline } from "@mui/icons-material";

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../common/constants'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

const Profile = () => {
    const [value, setValue] = React.useState(0),
        theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <main className={styles.profileMain}>
        <Grid container justifyContent={'center'} direction='column'>
            <Paper sx={{ mb: 4 }} elevation={0} className={styles.paper}>
                <Box sx={{ overflow: 'hidden', width: '100% ' }}>
                    <img className={styles.userCover} src={userCover} alt='User Cover' />
                </Box>
                <Box alignItems='center' justifyContent='space-between' display='flex' sx={{ pl: 4, pr: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', top: -25 }}>
                        <Avatar className={styles.avatar} alt="Jugal" src={defaultUser} sx={{ height: 100, width: 100 }} />
                        <Box sx={{ ml: 2, mt: 4 }}>
                            <Typography sx={{ fontWeight: 550, fontSize: 18 }}>Jugal</Typography>
                            <Typography sx={{ fontSize: 12, color: 'rgb(148, 164, 196)' }}>Developer</Typography>
                        </Box>
                    </Box>

                    <Box>
                        {/*Tabs*/}
                        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ gap: 5 }}>
                            <Tab label="Profile" {...a11yProps(0)} sx={{ fontWeight: 600 }} />
                            <Tab label="Follower" {...a11yProps(1)} sx={{ fontWeight: 600 }} />
                            <Tab label="Gallery" {...a11yProps(2)} sx={{ fontWeight: 600 }} />
                        </Tabs>
                        {/* </Box>  */}

                    </Box>
                </Box>
            </Paper>
            <Box sx={{ width: '100%' }}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                >
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={3}>
                            <Grid item xs={5}>
                                <Paper>
                                    <Box display={'flex'} margin='auto' className={styles.followersBox}>
                                        <Box>
                                            <Stack direction='row' spacing={2} alignItems='center'>
                                                <Stack>
                                                    <PersonAddAlt sx={{ color: '#fff', background: PRIMARY_COLOR, p: 2 }} className={styles.profileIcons} />
                                                </Stack>
                                                <Stack>
                                                    <Typography>Following</Typography>
                                                    <Typography>99999</Typography>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                        <Box>
                                            <Stack direction='row' spacing={2} alignItems='center'>
                                                <Stack>
                                                    <PersonOutline sx={{ color: '#fff', background: SECONDARY_COLOR, p: 2 }} className={styles.profileIcons} />
                                                </Stack>
                                                <Stack>
                                                    <Typography>Followers</Typography>
                                                    <Typography>99999</Typography>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <Box sx={{ p: 3 }}>
                                        <Stack spacing={2}>
                                            <Typography sx={{ fontSize: 18 }}>About</Typography>
                                            <small>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..</small>
                                            <Box sx={{ mt: 2 }}>
                                                <Stack spacing={2}>
                                                    <Stack direction='row' alignItems='center' spacing={1}>
                                                        <LocationOnOutlined sx={{ fontSize: '1.5rem' }} />
                                                        <Typography><small>Lives in</small> Kuwait</Typography>
                                                    </Stack>
                                                    <Stack direction='row' alignItems='center' spacing={1}>
                                                        <MailOutlined sx={{ fontSize: '1.5rem' }} />
                                                        <Typography variant="subtitle2" >Lenore_Rosenbaum@gmail.com</Typography>
                                                    </Stack>
                                                    <Stack direction='row' alignItems='center' spacing={1}>
                                                        <BusinessCenterOutlined sx={{ fontSize: '1.5rem' }} />
                                                        <Typography>Manager at UI_LIB   </Typography>
                                                    </Stack>
                                                    <Stack direction='row' alignItems='center' spacing={1}>
                                                        <CollectionsBookmarkOutlined sx={{ fontSize: '1.5rem' }} />
                                                        <Typography>Studied at Corwin - Blick   </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={7}>

                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </Grid>
    </main >
}

export default Profile;

