/* eslint-disable react/prop-types */

import { TextField,Paper,Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
function AddTask({onSave,onCancel}) {
    //States for title and description
    const [title,setTitle] = useState('');
     const[description,setDescription] = useState('');

     // Submit function call whenever user click onsave button
     function handleSubmit(e){
        e.preventDefault();
        if(!title.trim()){
            alert('Title is required')
            return;
        }
        //Sending the data to the onSave Prop
        onSave({title,description,completed:false})
        //Setting title and description to empty after adding
        setTitle('');
        setDescription('')
     }
    return (
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Add Task
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      
         <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
        </Box>
       </Paper>
    )
}

export default AddTask
