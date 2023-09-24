import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{
            width: '100%',
            p: 2
        }}>
            <Typography sx={{
                opacity: 0.40,
                color: '#FEFEFE',
                fontSize: 14,
                fontFamily: 'Poppins',
                fontWeight: '400',
            }}>Copyright © 2023. Reslink. All rights reserved.</Typography>
        </Box>
    )
}

export default Footer