/* eslint-disable react/prop-types */
import { createContext, useState,useContext,useEffect } from 'react';


const TaskContext = createContext();

function TaskProvider({children}){

const [tasks,setTasks] = useState([]);
console.log(tasks);

//Loading state of spinner
const [loading,setLoading] = useState(true);

useEffect(function(){
// async function to fetch the data from localhost server, give command npm run server for checking the todoData.json
    async function fetchData() {
        try{
        const res = await fetch('http://localhost:7000/todo')
         
        const data = await res.json();
        console.log(data);
            setTasks(data);
            setLoading(false);
        }catch(err){
          console.error(err);
        }
       
    }
    fetchData();
},[])
//adding the task logic in the state 
const addTask =(newTask) =>{
    setTasks((prevTasks) => [...prevTasks,newTask])
};

// updating the task logic in the state
const updateTask = (updatedTask) =>{
   
    setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask: task));
}
// deleting the task logic in the state
const deleteTask = (taskId)=>{
    setTasks(tasks.filter((task) => task.id !== taskId))
}

return (
    <TaskContext.Provider value={{tasks,loading,addTask,updateTask,deleteTask}}>
     {children}
    </TaskContext.Provider>
)
}

function useTask() {
    const context = useContext(TaskContext);
    if (context === undefined)
      throw new Error("TaskContext was used outside the TaskProvider");
    return context;
  }
  

export  {TaskProvider,useTask};