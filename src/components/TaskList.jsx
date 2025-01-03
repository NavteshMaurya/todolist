/* eslint-disable react/prop-types */

import { useTask } from "../context/TaskContext"
import {Box,CircularProgress,Typography,Grid} from '@mui/material'
import TaskItem from "./TaskItem";
function TaskList({tasks}) {

    const{loading} = useTask();
console.log(tasks);

const tasksPerColumn = 10;
const columns = [];

//group the task into the columns

for(let i=0;i<tasks.length;i += tasksPerColumn){
  columns.push(tasks.slice(i,i+tasksPerColumn))
}
console.log(columns);


//if loading is true then spinner shown
    if(loading){
        return(
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
        )
    }
   
    return (
    tasks.length === 0 ? (
            <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h6" color="textSecondary">
          No tasks found. Add a new task!
        </Typography>
      </Box>
        
    ) : (
      <Grid container spacing={2}>
      {columns.map((columnTasks, columnIndex) => (
        <Grid item xs={12} sm={6} md={6} key={columnIndex}>
          {columnTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </Grid>
      ))}
    </Grid>
    )
    
)
}

export default TaskList
