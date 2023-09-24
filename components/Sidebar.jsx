import { Box, Typography, ButtonBase, useTheme, Avatar } from '@mui/material'
import { ExitToApp } from '@mui/icons-material';

import { items, items2 } from '../src/hooks/config'
import '../styles/Navbar.css'

const Sidebar = () => {
    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02))',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '100%', width: '100%',
            p: 2,
            px: [0, 0, 2, 2],
            borderRight: '1px solid #3d3d3d',
            borderBottom: '0'
        }}>
            {/* Top Component */}
            <Box sx={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <a href="/">
                    <img alt="Logo" src="/public/logo.svg" className='logoclass' />
                </a>

                <Box sx={{ mt: 2, width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {items.map((item, index) => {
                            return (
                                <ButtonBase key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        textAlign: 'left',
                                        width: '90%',
                                        padding: '12px',
                                        fontSize: 14,
                                        borderRadius: '6px',
                                        backgroundColor: 'transparent',
                                        transition: 'all .2s ease-in-out',
                                        ml: '2px',
                                        mt: '3px',
                                        '&:hover': { backgroundColor: '#101215' },
                                        [theme.breakpoints.down('md')]: {
                                            ml: '0px',
                                            padding: '12px 6px'
                                        },
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            alignItems: 'center',
                                            color: 'neutral.400',
                                            display: 'inline-flex',
                                            justifyContent: 'center',
                                            mr: 2
                                        }}
                                    >
                                        <img src={item.icon} alt={item.title} />
                                    </Box>
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontWeight: 300,
                                            lineHeight: '24px',
                                            whiteSpace: 'nowrap',
                                            fontFamily: 'Poppins',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </ButtonBase>
                            )
                        }
                        )}
                    </Box>
                </Box>
            </Box>
            {/* Bottom Component */}
            <Box sx={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                <Box sx={{ mb: 2, width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {items2.map((item, index) => {
                            return (
                                <ButtonBase key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        textAlign: 'left',
                                        width: '90%',
                                        padding: '12px',
                                        fontSize: 14,
                                        borderRadius: '6px',
                                        backgroundColor: 'transparent',
                                        transition: 'all .2s ease-in-out',
                                        ml: '2px',
                                        mt: '3px',
                                        '&:hover': { backgroundColor: '#101215' },
                                        [theme.breakpoints.down('md')]: {
                                            ml: '0px',
                                            padding: '12px 6px'
                                        },
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            alignItems: 'center',
                                            color: 'neutral.400',
                                            display: 'inline-flex',
                                            justifyContent: 'center',
                                            mr: 2
                                        }}
                                    >
                                        <img src={item.icon} alt={item.title} />
                                    </Box>
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontWeight: 300,
                                            lineHeight: '24px',
                                            whiteSpace: 'nowrap',
                                            fontFamily: 'Poppins',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </ButtonBase>
                            )
                        }
                        )}
                    </Box>
                </Box>
                <Box
                    sx={{
                        py: 2,
                        pt: 3,
                        pb: 0,
                        display: 'flex',
                        alignItems: 'center',
                        width: ['90%', '100%'],
                        justifyContent: ['space-between', 'space-evenly'],
                        borderTop: '1px solid #9b9b9b',
                        [theme.breakpoints.down('md')]: {},
                    }}
                >
                    <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300"
                        sx={{
                            width: 34,
                            height: 34,
                            [theme.breakpoints.down('md')]: {
                                width: 34,
                                height: 34,
                                mr: '3px'
                            }
                        }} />
                    <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', mr: '3px' }}>
                        <Typography
                            component="span"
                            sx={{
                                fontWeight: 300,
                                lineHeight: '24px',
                                whiteSpace: 'nowrap',
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                color: '#fff',
                                [theme.breakpoints.down('md')]: {
                                    lineHeight: '20px',
                                }
                            }}
                        >
                            Olivia Rhye
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                fontWeight: 300,
                                lineHeight: '24px',
                                whiteSpace: 'nowrap',
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                color: '#fff',
                                [theme.breakpoints.down('md')]: {
                                    lineHeight: '20px',
                                }
                            }}
                        >
                            olivia@untitledui.com
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <ExitToApp />
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Sidebar