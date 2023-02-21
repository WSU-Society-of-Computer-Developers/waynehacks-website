import * as React from "react";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from "@mui/material/Typography";
import './App.css';
import { borderLeft } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";



function App() {
  return (
    <Grid container >
      <Grid item xs={12} align="center">
        <Typography variant="h1" compact="h1" style={{ fontFamily: 'SIFFON_BASIC', fontSize: "5em" }}>
          WayneHacks
        </Typography>
      </Grid>
      <Grid item xs={12} align="center" style={{ fontFamily: 'GlacialIndifference-Bold', }}>
        <Typography variant="h4" compact="h4">
          Virtual Hackathon
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h5" compact="h5">
          March 3-5
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          sx={{
            color: '#014725',
            backgroundColor: 'white',
            opacity: .9,
            borderColor: '#014725',
            borderRadius: '50px',
            fontWeight: 'bold',
            border: '2px solid',
            '&:hover': {
              backgroundColor: '#fff',
              opacity: 1,
              color: '#014725',
            }
          }}
          variant="contained">
          Register
        </Button>
      </Grid>
    </Grid>
  )
}

export default App;
