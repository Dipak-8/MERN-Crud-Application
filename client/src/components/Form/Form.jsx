import React, { useState } from "react";
import { Typography, Paper, TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { rootStyles, paperStyles, formStyles, fileInputStyles, buttonSubmitStyles } from "./Styles";
import { createPost } from "../../actions/Posts";


const Form = () => {

  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPostData({ ...postData, selectedFile: reader.result });
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createPost(postData));
  };

  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  return (
    <Paper sx={paperStyles}>
      {/* Use Box instead of <form> to apply sx styles */}
      <Box component="form" autoComplete="off" noValidate sx={{ ...formStyles, ...rootStyles }} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField 
          name="creator" variant="outlined" label="Creator"
          fullWidth value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField 
          name="title" variant="outlined" label="Title"
          fullWidth value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField 
          name="message" variant="outlined" label="Message"
          fullWidth value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField 
          name="tags" variant="outlined" label="Tags"
          fullWidth value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        {/* Use 'style' instead of sx for normal div */}
        <div style={fileInputStyles}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <Button sx={buttonSubmitStyles} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="large" fullWidth onClick={clear}>
          Clear
        </Button>
      </Box>
    </Paper>
  );
};

export default Form;
