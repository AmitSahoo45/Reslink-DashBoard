import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = ({ theme }) => {
    return (
        <Box sx={{ width: '100%', mt: [2, 2, 5, 5] }}>
            <Typography sx={{ fontSize: 24, fontWeight: 400, lineHeight: '34px', fontFamily: 'Poppins' }}>
                Welcome back, Olivia
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 300, lineHeight: '24px', fontFamily: 'Poppins' }}>
                Track, manage researchers and submissions.
            </Typography>
        </Box>
    )
}

export default Header