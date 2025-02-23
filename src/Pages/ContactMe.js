import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function ContactMe() {
  return (
    <>
      <Typography variant="h1" component="h2" align="center" sx={{ my: 2.5 }}>
        Contacts
      </Typography>
      <List dense={0}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <LocalPhoneRoundedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="+1 (123) 456-7890" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <EmailRoundedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="LK@gmail.com" />
        </ListItem>
      </List>
    </>
  );
}

export default ContactMe;
