import React, { useContext } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Person2Outlined, DriveFileRenameOutlineOutlined, BookmarksOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';

import { ContextStore } from '../context/Context'

const Metric = () => {
    const { ACTIVEPROJECTS, PROPOSALS, ACTIVEJOBS, APPLICATION } = useContext(ContextStore)

    console.log(ACTIVEPROJECTS, PROPOSALS, ACTIVEJOBS, APPLICATION)

    return (
        <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ px: 2, py: 3, background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px rgba(255, 255, 255, 0.13) solid', backdropFilter: 'blur(20.80px)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%' }}>
                    <Box >
                        <Typography sx={{ color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>0{ACTIVEPROJECTS}</Typography>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>Active Projects</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#3FA268', p: 1, borderRadius: 8, ml: '0.22rem' }}>
                        <Person2Outlined sx={{ color: '#FFFFFF' }} />
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ px: 2, py: 3, background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px rgba(255, 255, 255, 0.13) solid', backdropFilter: 'blur(20.80px)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%' }}>
                    <Box >
                        <Typography sx={{ color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>0{PROPOSALS}</Typography>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>Active Proposals</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#3FA268', p: 1, borderRadius: 8, ml: '0.22rem' }}>
                        <DriveFileRenameOutlineOutlined sx={{ color: '#FFFFFF' }} />
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ px: 2, py: 3, background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px rgba(255, 255, 255, 0.13) solid', backdropFilter: 'blur(20.80px)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%' }}>
                    <Box >
                        <Typography sx={{ color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>0{ACTIVEJOBS}</Typography>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>Active Jobs</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#3FA268', p: 1, borderRadius: 8, ml: '0.22rem' }}>
                        <BookmarksOutlined sx={{ color: '#FFFFFF' }} />
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ px: 2, py: 3, background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px rgba(255, 255, 255, 0.13) solid', backdropFilter: 'blur(20.80px)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%' }}>
                    <Box >
                        <Typography sx={{ color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>{APPLICATION}</Typography>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>Active Application</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#3FA268', p: 1, borderRadius: 8, ml: '0.22rem' }}>
                        <RemoveRedEyeOutlined sx={{ color: '#FFFFFF' }} />
                    </Box>
                </Box>
            </Grid>

        </Grid>
    )
}

export default Metric