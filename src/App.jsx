import { useState,useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import WorkloadSummary from "./components/WorkloadSummary";
import TaskList from "./components/TaskList";


function App() {
  const [tasks,setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem("tasks") ;
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const [editingTask,setEditingTask] = useState(null);
  return (
     <div className="min-h-screen bg-slate-100">
      <Header />

      <WorkloadSummary tasks = {tasks} />

     <main className="grid grid-cols-1 items-start gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(300px,350px)_minmax(0,1fr)] lg:gap-8 lg:px-8">
  <TaskForm
    key={editingTask?.id ?? "new"}
    tasks={tasks}
    setTasks={setTasks}
    editingTask={editingTask}
    setEditingTask={setEditingTask}
  />

  <TaskList
    tasks={tasks}
    setTasks={setTasks}
    setEditingTask={setEditingTask}
  />
</main>
    </div>
  )
}

export default App