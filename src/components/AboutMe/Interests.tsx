import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Interests() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "aliceblue" }}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar
            sx={{ p: 1, m: 1,mr:2 }}
            alt="airplane"
            src="../../src/assets/airplane2.svg"
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: "inline",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
                component="span"
                variant="h6"
                color="#45893e"
              >
                Travelling
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body1"
                color="#45893e"
                fontWeight={"400"}
              >
                Visiting places where I have never been is one of my favorite
                things.
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar
            sx={{ p: 1, m: 1, mr:2 }}
            alt="coffee"
            src="../../src/assets/coffee.svg"
            color="#7b573b"
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: "inline",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
                component="span"
                variant="h6"
                color="#7b573b"
              >
                Coffee
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body1"
                color="#7b573b"
                fontWeight={"400"}

              >
                Coffee just makes everything better.
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar
            sx={{ p: 1, m: 1, mr:2 }}
            alt="coffee"
            src="../../src/assets/beer.svg"
            color="#7b573b"
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: "inline",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
                component="span"
                variant="h6"
                color="#FBB03B"
              >
                Beer
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body1"
                color="#FBB03B"
                fontWeight={"400"}

              >
                When adulting is hard, beer is the answer. If accompanied, much better.
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar
            sx={{ p: 1, m: 1, mr:2 }}
            alt="coffee"
            src="../../src/assets/controller.svg"
            color="#7b573b"
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: "inline",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
                component="span"
                variant="h6"
                color="#9c3535"
              >
                Videogames
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body1"
                color="#9c3535"
                fontWeight={"400"}

              >
                Simply, the best way to forget about all my problems.
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
