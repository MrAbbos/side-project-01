import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function ListDocumentTypes() {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      sx={{
        display: "flex",
        justifyContent: "center",
        mx: 8,
        alignItems: "center",
        height: "100vh",
      }}
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ width: "100%", mx: 16 }}
      >
        <Link to="/car-pricing">
          <ListItemButton
            sx={{ p: "32px", m: "16px" }}
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary="Avtomobil baholash" />
          </ListItemButton>
        </Link>
        <Divider />
        <Link to="/house-pricing">
          <ListItemButton
            sx={{ p: "32px", m: "16px" }}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Uy-joy baholash" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
}
