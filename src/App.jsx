import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import AddTaskPage from './pages/AddTaskPage'
import EditTaskPage from './pages/EditTaskPage'
import { CssBaseline,Container } from "@mui/material";
import {TaskProvider} from './context/TaskContext';
function App() {
  return (
   
    <TaskProvider>
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </Container>
    </Router>
  </TaskProvider>
    
  )
}

export default App
