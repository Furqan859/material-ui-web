import { Card, Grid, Paper } from '@mui/material'
import React from 'react'
import  Typography  from '@mui/material/Typography';

export default function Main() {
  return (
    <Grid xs={12}>
    <Card xs={6} variant="outlined">
    <img src="" alt="Lazy Imagw" sx={{height:'150px',width:'150px'}}/>
    <Paper>LAzy Image CARD</Paper>
    </Card>
    </Grid>
  )
}
