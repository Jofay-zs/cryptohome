import React from "react";
import { Container } from "@mui/material";
import { Sidebardata } from "./Sidebardata";
import { ListItemIcon, ListItemText } from "@mui/material";
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
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  icon: {
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
              xs={12}
              sm={6}
              md={4}
              key={key}
              className={classes.listItem}
            >
              <Link to={i.link} className={classes.listItemLink}>
                <ListItemIcon>
                  <span className={classes.icon}>{i.icon}</span>
                </ListItemIcon>
                <ListItemText>{i.title}</ListItemText>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Sidebar;
