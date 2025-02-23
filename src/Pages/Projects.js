import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";

function Projects() {
  return (
    <>
      <Typography variant="h1" component="h2" align="center" sx={{ my: 2.5 }}>
        Projects
      </Typography>
      <List dense={0}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <CalculateTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Homemade Calculator &emsp; | &emsp; https://replit.com/@lck21/Calculator" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <ImportContactsTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Address Book:" />
        </ListItem>
        <List dense={0}>
          <ListItem sx={{ pl: 12 }}>
            <ListItemText primary="Address Book Front End &emsp; | &emsp; https://replit.com/@lck21/AddressBookFrontEnd" />
          </ListItem>
          <ListItem sx={{ pl: 12 }}>
            <ListItemText primary="Address Book Back End &emsp; | &emsp; https://replit.com/@lck21/AddressBookBackEnd" />
          </ListItem>
        </List>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <FormatListBulletedTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="To Do List:" />
        </ListItem>
        <List dense={0}>
          <ListItem sx={{ pl: 12 }}>
            <ListItemText primary="To Do List Front End &emsp; | &emsp; https://replit.com/@lck21/toDoList" />
          </ListItem>
          <ListItem sx={{ pl: 12 }}>
            <ListItemText primary="To Do List Back End &emsp; | &emsp; https://replit.com/@lck21/ToDoListBackEnd" />
          </ListItem>
        </List>
      </List>
    </>
  );
}

export default Projects;
