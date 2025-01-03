/* eslint-disable react/prop-types */
// import {TaskContext} from '../context/TaskContext'
import  {useTask } from "../context/TaskContext";

import {Link} from 'react-router-dom'
import { Card, CardContent, Typography, Button,Box, IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';



function TaskItem({task}){

 // getting delete task from the context
    const {deleteTask} = useTask();

 
 function handleDelete(){

 // deleting the data from the server
    fetch(`http://localhost:7000/todo/${task.id}`, {
        method: 'DELETE', // Specifies the DELETE HTTP method
        headers: {
          'Content-Type': 'application/json', 
          
        },
     
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Failed to delete resource');
        })
        .then(data => {
          console.log('Deleted resource:', data);
          deleteTask(task.id);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
return (
        <Card sx={{marginBottom: 2}}>
           <CardContent>
           <Typography variant="subtitle2" color="textSecondary">
          Title
        </Typography>
            <Typography variant="h6" gutterBottom>
                {task.title}
            </Typography>
            <Typography variant="subtitle2"
            color="textSecondary">
          Description
        </Typography>
            <Typography variant="h6" gutterBottom
                  sx={{
                    wordWrap: "break-word", // Ensures long words break to the next line
                    overflow: "hidden", // Prevents overflow
                    textOverflow: "ellipsis", // Adds ellipsis if overflow occurs
                    display: "-webkit-box", // Works with line clamp for multiline
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 5, // Adjust number of lines to show
                    }}
            
            >
                {task.description}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" paragraph>{task.description}</Typography> */}
             <Typography variant="body2" color="textSecondary">{`Status : ${task.completed ? 'completed': 'pending'}`}</Typography>
             <Box sx={{ marginTop: 2 }}>
          <Button variant="outlined" component={Link} to={`/edit/${task.id}`} sx={{ marginRight: 1 }}>
            Edit
          </Button>
          <IconButton color="error" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
           </CardContent>
        </Card>
            
)

}
export default TaskItem;