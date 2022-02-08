import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({}));

export const General = () => {
  const classes = useStyles();
  return (
    <Box>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};
