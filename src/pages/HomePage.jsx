import {Typography,Box,Button } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import  { useTask } from '../context/TaskContext'
// import TaskItem from '../components/TaskItem'
import TaskList from '../components/TaskList';
function HomePage() {

    
const {loading,tasks} = useTask();


if(loading){
    return <div>Loading...</div>
}

return (

  <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
     width: "100%",
    padding: 2,
  }}
>
      <Typography variant="h2" gutterBottom align='center'>
        Todo List
      </Typography>
    {/* Add Button */}
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/add"
        sx={{
          padding: '10px 20px',
          fontSize: '16px',
          marginBottom: 3
        }}
      >
        Add Task
      </Button>
    {/* Task List component */}
    <TaskList tasks={tasks} />
 
  </Box>

)
}

export default HomePage
