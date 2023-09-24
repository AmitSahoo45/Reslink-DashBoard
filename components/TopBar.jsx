import { useState } from "react"
import { Badge, Box, Button, Input, Typography } from "@mui/material"
import { Notifications, Search, Add, Menu } from '@mui/icons-material';

const TopBar = ({ handleDrawerToggle }) => {
    const [search, setSearch] = useState('')

    return (
        <>
            {/* Logo - only for mobile screens */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: ['column-reverse', 'column-reverse', 'row', 'row'],
            }}>
                {/* Search bar */}
                <Box
                    sx={{ flex: ['0.5', '0.5', '0.6', '0.75'], width: '100%' }}
                >
                    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Input
                            placeholder="Search"
                            sx={{ background: '#101215', borderRadius: 26, color: '#FFFFFF', px: '0.5rem', pl: '3rem', py: '0.3rem', boxShadow: 'none', width: ['100%', '100%', '80%', '60%'] }}
                            disableUnderline
                        />
                        <Search sx={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#FFFFFF' }} />
                    </Box>
                </Box>

                <Box component='div' sx={{ mx: 'auto', display: ['block', 'block', 'none', 'none'], my: 1 }}>
                    <Box sx={{ width: '120px' }} component='div' >
                        <img alt="Logo" src="/logo.svg" className='logoclass' />
                    </Box>
                </Box>


                {/* Project Bar */}
                <Box sx={{
                    flex: ['0.5', '0.5', '0.4', '0.25'], display: 'flex', justifyContent: ['space-between', 'space-between', 'flex-end', 'flex-end'], alignItems: 'center', flexDirection: ['row-reverse', 'row-reverse', 'row', 'row'], mb: [1.5, 1.5, 0, 0], width: ['100%', '100%', '100%', '100%']
                }}>
                    <Badge color="error" variant="dot" sx={{ mr: '0.6rem' }}>
                        <Notifications />
                    </Badge>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            sx={{
                                borderRadius: 8, display: 'flex', px: 1.5, py: 0.5,
                                justifyContent: 'center', alignItems: 'center',
                                background: '#3FA268', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 25,
                                border: '1px #3FA268 solid',
                                display: ['none', 'none', 'block', 'block']
                            }}
                        >
                            {/* <Add sx={{ color: '#FFFFFF' }} /> */}
                            <Typography sx={{ color: '#FFFFFF', fontSize: '0.5rem', fontFamily: 'Poppins', py: 1 }}>Create New Project</Typography>
                        </Button>
                    </Box>

                    <Box
                        sx={{ display: ['block', 'block', 'none', 'none'] }}
                        onClick={handleDrawerToggle}
                    >
                        <Menu sx={{ color: '#FFFFFF' }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default TopBar