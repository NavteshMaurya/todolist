import { useState } from "react"
import {useTask} from '../context/TaskContext'
import AddTask from "../components/AddTask";
import { useNavigate } from "react-router-dom";
import { Container,Typography,Box,Alert,Snackbar } from "@mui/material";


function AddTaskPage() {
  const navigate = useNavigate();


  const{addTask} = useTask();
  // State for setting error and successmessage
    const [errorMessage,setErrorMessage] = useState('');
    const[successMessage,setSuccessMessage] = useState('');
   

    // async function for adding the new task on the server
   async function handleSave(newTask){
    try {
      const response = await fetch('http://localhost:7000/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error('Failed to save the task to the server.');
      }
const createdTask = await response.json();

//Sending cretedTask to the addTask
addTask(createdTask);
setSuccessMessage('Task added successfully');
// Redirect to the homepage after a successful adding task
setTimeout(() => {
  navigate('/');
},500);
          
        }catch(error){
          setErrorMessage(error.message);
        }
    }

    //handleCancel function call when user click on cancel button
    function handleCancel(){
      navigate('/');
    }
    return (
   
      <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4">Add New Task</Typography>
      </Box>
      <AddTask onSave={handleSave} onCancel={handleCancel} />
    
      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage('')}
      >
        <Alert onClose={() => setSuccessMessage('')} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={3000}
        onClose={() => setErrorMessage('')}
      >
        <Alert onClose={() => setErrorMessage('')} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    
    </Container>   
    )
}

export default AddTaskPage
