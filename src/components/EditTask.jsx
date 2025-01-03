/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { TextField,Checkbox,Button,FormControlLabel,Box,Typography,Paper } from "@mui/material";
function EditTask({task,onSave,onCancel}) {
    const [title,setTitle] = useState('');
    const [description,setDecription] = useState('');
    const [completed,setCompleted] = useState( false);

    // Setting the initial State when the edit page load 
    useEffect(function(){
   if(task){
    setTitle(task.title);
    setDecription(task.description);
    setCompleted(task.completed);
   }
    },[task])





    // Save function call when the user click on Save button
    function handleSave(){
        const updatedTask = {
            ...task,
            title,
            description,
            completed,
        }

        console.log(updatedTask);
        //sending updated task to onsave Prop
        onSave(updatedTask);
        setTitle('');
        setDecription('')
        
    }




    return (
             <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Edit Task
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
          onChange={(e) => setDecription(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              color="primary"
            />
          }
          label="Completed"
        />
         <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="contained" color="primary" onClick={handleSave}>
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

export default EditTask;
