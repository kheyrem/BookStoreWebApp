import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  const [value, setValue] = useState();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="static">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <LibraryBooksIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books"></Tab>
            <Tab LinkComponent={NavLink} to="/add" label="Add Book"></Tab>
            <Tab LinkComponent={NavLink} to="/about" label="About Us"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
