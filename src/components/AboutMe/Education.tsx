import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Education() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'aliceblue' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Releevant" src="../../src/assets/releevant.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Bootcamp"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Releevant
              </Typography>
              {" — Full stack Web Developer"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="uma" src="../../src/assets/uma.png" />
        </ListItemAvatar>
        <ListItemText
          primary="University Degree"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                UMA (University of Malaga)
              </Typography>
              {" — Business and Management"}
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
  );
}