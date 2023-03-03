import * as React from "react";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from "@mui/material/Typography";
import './App.css';
import { Fade, Grow } from "@mui/material";
import QA from "./comps/QA";

const mainColor = "#1bf58b";

/** @type { [key:string]: SxProps<Theme> | undefined }*/
const classes = {
  title: {
    fontSize: { lg: "7vw", sm: "4em", xs: "14vw" },
    fontFamily: 'SIFFON_BASIC',
    color: mainColor
  }
}

const BtnStyling = {
  color: '#014725',
  backgroundColor: 'white',
  fontFamily: 'GlacialIndifference-Bold',
  letterSpacing: "1.5px",
  opacity: .9,
  fontSize: "1.6em",
  borderColor: '#014725',
  borderRadius: '50px',
  fontWeight: 'bold',
  border: '2px solid',
  '&:hover': {
    backgroundColor: '#fff',
    opacity: 1,
    color: '#014725',
  }
}
function App() {

  return (
    <Grid container
      direction="column"
      //alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grow in timeout={1000}>
        <Grid item xs={12} align="center" sx={{ paddingTop: 30 }}>
          <Typography variant="h1" compact="h1" sx={classes.title} style={{ marginBottom: 10 }}>
            WayneHacks
          </Typography>
        </Grid>
      </Grow>
      <Fade in timeout={2000}>
        <div>
          <Grid item xs={12} align="center" >
            <Typography variant="h5" compact="h5" sx={{ color: mainColor, letterSpacing: 3 }} style={{ fontFamily: 'GlacialIndifference-Bold' }}>
              VIRTUAL HACKATHON
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" spacing={10}>
            <Typography variant="h6" compact="h6" sx={{ color: mainColor, letterSpacing: 3, paddingTop: 3 }} style={{ fontFamily: 'GlacialIndifference-Bold', }}>
              MARCH 3-5
            </Typography>
          </Grid>
          {/* <Grid item xs={12} align="center" sx={{ paddingTop: 3 }}>
            <Button
              sx={BtnStyling}
              variant="contained"
              href="https://forms.gle/f9NVtme9KLDUFp4c8" target="_blank">
              Register
            </Button>
          </Grid> */}
          <Grid item xs={12} align="center" sx={{ paddingTop: 3 }}>
            <Button sx={BtnStyling} target="_blank" variant="contained" href="https://waynehacks.devpost.com/">DevPost</Button>
          </Grid>
          <Grid item xs={12} align="left" sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
            <Typography variant="h5" compact="h5" sx={{ color: mainColor, }}
              style={{ fontFamily: 'SIFFON_BASIC', fontSize: "2em" }}>
              What is WayneHacks?
            </Typography>
          </Grid>
          <Grid item xs={12} align="left" sx={{ paddingLeft: 10, paddingRight: 10 }}>
            <Typography variant="h6" compact="h6" sx={{ color: mainColor, paddingTop: 2 }}
              style={{ fontFamily: 'GlacialIndifference-Regular', }}>
              WayneHacks is a 48-hour virtual hackathon taking place March 3-5! Hackers will have 48 hours to complete a project related to the theme given at the opening ceremony. WayneHacks will also host workshops and 2 gaming tournaments during the event! Prizes will be given out at the end to the top 3 hacks and all hackers who submit a hack will be entered into a raffle for any left over prizes!  Prizes will also be given out to the winners of the game tournaments. Want to attend? Click the button above to register!
            </Typography>
          </Grid>
          <Grid item xs={12} align="left" sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
            <Typography variant="h5" compact="h5" sx={{ color: mainColor, }}
              style={{ fontFamily: 'SIFFON_BASIC', fontSize: "2em" }}>
              FAQs
            </Typography>
          </Grid>
          <Grid item xs={12} align="left" sx={{ paddingLeft: 10, paddingRight: 10 }}>
            <Typography variant="h6" compact="h6" sx={{ color: mainColor, paddingTop: 2 }}
              style={{ fontFamily: 'GlacialIndifference-Regular', }}>
              <QA question="What is a Hackathon?" answer="A hackathon is an event where programmers get together for a short period of time to collaborate and create a project! The theme will be announced at the opening ceremony, and hackers will have 48 hours to complete a project related to it. Attending these events and participating is a great resume booster!" />
              <QA question="I am a beginner and don't know how to code, can I still participate?" answer="Anyone can participate! We welcome all beginners to experts in development. Hackathons are a perfect place to learn new skills and find out what it takes to build an application!" />
              <QA question="Where is WayneHacks?" answer="Online through the Discord platform. We will be sending invites out soon. Stay tuned!" />
              <QA question="Can I work alone or in a team?" answer="Teams can consist of 1-4 members. Don't worry if you do not have a team! We will have a section in the Hackathon Discord Server to find team members." />
              <QA question="I signed up...now what?" answer="Be on the lookout for an email a week before the Hackathon to join our Discord Server. We will use this for members looking for a group, updates, and announcements throughout the Hackathon!" />
              <QA question="How much in prizes are awarded?" answer="$5000 in prizes!" />
            </Typography>
            <Typography variant="h6" compact="h6" sx={{ color: mainColor, paddingTop: 2 }}
              style={{ fontFamily: 'GlacialIndifference-Regular', }}>
              Contact us at <a style={{ color: mainColor }} href="mailto:info@waynehacks.com"
                target="_blank" rel="noreferrer noopener">info@waynehacks.com</a>
            </Typography>
          </Grid>
          <Grid item xs={12} align="left" sx={{ gridArea: 'footer', paddingTop: 15, paddingLeft: 10, paddingRight: 10, paddingBottom: 5 }}>
            <Typography variant="h6" compact="h6" sx={{ color: mainColor, paddingTop: 2 }}
              style={{ fontFamily: 'GlacialIndifference-Bold', letterSpacing: 1, fontSize: "1em" }}>
              &copy; WayneHacks 2023
            </Typography>
          </Grid>
        </div>
      </Fade>
    </Grid>

  )
}

export default App;
