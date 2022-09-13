import React from 'react';
import { 
    Paper, 
    Box, 
    IconButton 
} from '@mui/material';
import {
    Twitter as TwitterIcon,
    Facebook as FacebookIcon,
    Reddit as RedditIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const Footer = () => {
    return (
    <Paper elevation={0} sx={{ bgcolor: 'black',}} square={true} center>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
      <IconButton 
        color="secondary" 
        aria-label="Facebook" 
        size="large"
        onClick={() => window.open('https://www.facebook.com/103242499200989/posts/799811647820779/?substory_index=799811647820779')}
      >
        <FacebookIcon sx={{ fontSize: {md:40} }}/>
      </IconButton>
      <IconButton 
        color="secondary" 
        aria-label="Twitter"
        size="large"
        onClick={() => window.open('https://twitter.com/vayuvyastra?t=os7YGqxfkfxXnUmusfD5BQ&s=09')}
      >
        <TwitterIcon sx={{ fontSize: {md:40} }}/>
      </IconButton>
      <IconButton 
        color="secondary" 
        aria-label="Instagram"
        size="large"
        onClick={() => window.open('https://www.instagram.com/vayuvyastra_official/?igshid=YmMyMTA2M2Y%3D')}
      >
        <InstagramIcon sx={{ fontSize: {md:40} }}/>
      </IconButton>
      {/*  */}
      <IconButton 
        color="secondary" 
        aria-label="LinkedIn"
        size="large" 
        onClick={() => window.open('https://www.linkedin.com/company/vayuvyastra/about/')}
      > 
        <LinkedInIcon sx={{ fontSize: {md:40} }} />
      </IconButton>
      <IconButton 
        color="secondary" 
        aria-label="Reddit"
        size="large" 
        onClick={() => window.open('https://www.reddit.com/user/VAYUVASTRA?utm_medium=android_app&utm_source=share')}
      >  
        <RedditIcon sx={{ fontSize: {md:40} }} />
      </IconButton>

      </Box>
       
    </Paper>
    );
};

export default Footer;