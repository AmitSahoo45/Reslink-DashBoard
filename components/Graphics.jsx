import React, { useContext } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { ContextStore } from '../context/Context'

const Graphics = () => {
    const { postedProjects } = useContext(ContextStore)

    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                    sx={{
                        width: ['91%', '90%', '90%', '90%'],
                        background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px',
                        border: '1px rgba(255, 255, 255, 0.13) solid', backdropFilter: 'blur(20.80px)',
                        p: 2
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                            Posted Projects
                        </Typography>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                            See All
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column',
                        mt: '0.2rem'
                    }}>
                        {postedProjects?.map((project, index) =>
                            <Box key={index} sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
                                mt: '0.6rem', px: '0.2rem', py: '0.35rem', background: 'rgba(33, 40, 44)', borderRadius: '8px', cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    background: 'rgba(11,14,15)'
                                }
                            }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '50%', ml: 1 }}>
                                    <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins' }}>
                                        {project.title.substring(0, 20)}..
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }}>
                                        <Box sx={{ background: project.color, height: '0.8rem', width: '0.8rem', borderRadius: 9999, mr: 1 }}></Box>
                                        <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins' }}>
                                            {project.status}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                    sx={{
                        width: ['91%', '90%', '90%', '90%'],
                        background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px',
                        border: '1px rgba(255, 255, 255, 0.13) solid', backdropFilter: 'blur(20.80px)',
                        p: 2
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                            Posted Projects
                        </Typography>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                            See All
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column',
                        mt: '0.2rem'
                    }}>
                        {postedProjects?.map((project, index) =>
                            <Box key={index} sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
                                mt: '0.6rem', px: '0.2rem', py: '0.35rem', background: 'rgba(33, 40, 44)', borderRadius: '8px', cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    background: 'rgba(11,14,15)'
                                }
                            }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '50%', ml: 1 }}>
                                    <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins' }}>
                                        {project.title.substring(0, 20)}..
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }}>
                                        <Box sx={{ background: project.color, height: '0.8rem', width: '0.8rem', borderRadius: 9999, mr: 1 }}></Box>
                                        <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontFamily: 'Poppins' }}>
                                            {project.status}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Graphics