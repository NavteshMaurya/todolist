import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import {useTask} from '../context/TaskContext'
import { Box, Typography,CircularProgress,Snackbar,Alert } from '@mui/material';
import EditTask from "../components/EditTask";
function EditTaskPage() {

    const {id} = useParams();
    console.log(id);
    const[task,setTask] = useState(null);

    const{tasks,updateTask} = useTask();

   const navigate = useNavigate();


   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(false);


    useEffect(() =>{
      const fetchTask = async () => {
        try {
          setLoading(true);
        const taskToEdit = tasks.find((t)=> t.id === parseInt(id));
        console.log(taskToEdit);
        if (taskToEdit) {
          setTask(taskToEdit);
        } else 
        //if the tasktoedit is undefined then fetching task directly from server
        {
          const response = await fetch(`http://localhost:7000/todo/${id}`);
          if (!response.ok) {
            throw new Error("Task not found on the server.");
          }
          const fetchedTask = await response.json();
          setTask(fetchedTask);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTask();
    },[id,tasks])

// Cancle function called when user click on cancel button
     const handleCancel = () =>{
      navigate('/');
     }
    

     // async function for updating the task on the server
     const handleSave = async (updatedTask) => {
      console.log(updatedTask);
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:7000/todo/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTask),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update the task on the server.');
        }
  
        const updatedData = await response.json();
        updateTask(updatedData); // Update context with new task data

        setSuccess(true);
        // Redirect to the homepage after a successful update
        setTimeout(() => {
          navigate('/');
        }, 500);
      
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if(loading){
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
      )
    }
    return (
      <Box sx={{padding: 4}}>
        {error ?(
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        ):(
          <>
          {task && (
            <EditTask task={task} onSave={handleSave} onCancel={handleCancel}></EditTask>
          )}
           <Snackbar
            open={success}
            autoHideDuration={4000}
            onClose={() => setSuccess(false)}
          >
            <Alert onClose={() => setSuccess(false)} severity="success">
              Task updated successfully!
            </Alert>
          </Snackbar>
          
          
          </>

        ) }
       
      </Box>
  
    )
}

export default EditTaskPage
