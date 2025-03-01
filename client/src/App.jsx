import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@mui/material";
import { appBarStyles, headingStyles, imageStyles } from "./styles"; 
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/Posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./Assets/memories.png";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" sx={appBarStyles}>
        <Typography variant="h2" align="center" sx={headingStyles}>
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" style={imageStyles} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
