import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import cryptoIcon from "../images/cryptocurrency.ico";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  container: { width: "100vw" },
  toolbar: {
    backgroundColor: "#2c3f68",
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isOpenNavbar, setIsOpenNavbar] = React.useState(false);

  return (
    <div className={classes.container}>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="end"
            className={classes.icon}
            onClick={() => {
              setIsOpenNavbar(!isOpenNavbar);
            }}
          >
            <span className={classes.icon}>
              <MenuIcon />
            </span>
          </IconButton>
          <Typography variant="h6"></Typography>
          <Box display="flex" alignItems={"center"}>
            <img src={cryptoIcon} alt="Three coins" width={40} />
            <Typography variant="h5" components="span">
              Cryptohome
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {isOpenNavbar ? <Sidebar /> : <></>}
    </div>
  );
};

export default Navbar;
