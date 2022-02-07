import React from "react";
import { Container } from "@mui/material";
import { Sidebardata } from "./Sidebardata";
import { List, ListItemIcon, ListItem, ListItemText, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#2c3f68",
    borderRadius: "0 0 20px 20px",
  },
  listItem: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  listItemLink: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
  },
  listItemIcon: {
    color: "#fff",
  },
  listItemText: {
    color: "#fff",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} position="sticky">
      <Grid container className={classes.list}>
        {Sidebardata.map((i, key) => {
          return (
            <Grid
              item
              button
              xs={12}
              sm={6}
              md={4}
              key={key}
              className={classes.listItem}
            >
              <Button variant="text">
                <Link to={i.link} className={classes.listItemLink}>
                  <ListItemIcon className={classes.listItemIcon}>
                    {i.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={i.title}
                    className={classes.listItemText}
                  />
                </Link>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Sidebar;
