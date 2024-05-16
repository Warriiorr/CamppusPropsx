import { Grid, Typography } from '@mui/material'
import React from 'react'
import pose23 from '../assets/Pose23.png'

function Search() {
  return (
    <Grid sx={{marginTop: 10, display: "flex", flexDirection: "column", alignItems:"center"}}>
    <Typography>Search</Typography>
    <Grid sx={{}}><img style={{height: "100vh", width: "50vw"}} src={pose23} alt='search bg img'/></Grid>
    </Grid>
  )
}

export default Search