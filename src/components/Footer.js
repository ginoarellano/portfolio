import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SplitText from '../components/SplitText'; 
import '../styles/Footer.css';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="footer-container">
      {/* Center: Copyright */}
      <div className="footer-center">
        <SplitText
          text="© 2026 Gino Christian Arellano. All Rights Reserved."
          tag="p"
          className="copyright-text"
          delay={0.1}
          duration={0.6}
          ease="power2.out"
          from={{ opacity: 0, y: 15 }}
          to={{ opacity: 1, y: 0 }}
        />
      </div>

      {/* Right: Icons with dynamic links */}
      <div className="footer-right">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="footer-nav"
        >
          {/* Social Media Links */}
          <BottomNavigationAction 
            label="Facebook" 
            icon={<FacebookIcon />} 
            href="https://www.facebook.com/ginoarellano19" 
            target="_blank" 
            rel="noopener noreferrer"
          />
          <BottomNavigationAction 
            label="GitHub" 
            icon={<GitHubIcon />} 
            href="https://github.com/ginoarellano" 
            target="_blank" 
            rel="noopener noreferrer"
          />
          <BottomNavigationAction 
            label="LinkedIn" 
            icon={<LinkedInIcon />} 
            href="https://www.linkedin.com/in/arellano-gino-christian-e-31949b379/" 
            target="_blank" 
            rel="noopener noreferrer"
          />

          {/* Contact Actions from CV  */}
          <BottomNavigationAction 
            label="Email" 
            icon={<MailIcon />} 
            href="mailto:arellano.ginochristian.edralin@gmail.com" 
          />
          <BottomNavigationAction 
            label="Phone" 
            icon={<AddIcCallIcon />} 
            href="tel:+639947729281" 
          />
        </BottomNavigation>
      </div>
    </Box>
  );
}