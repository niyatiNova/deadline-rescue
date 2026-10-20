import { use, useState } from "react";
const TaskList = ({tasks,setTasks,setEditingTask}) => {

const [search, setSearch] = useState("");
const [status, setStatus] = useState("all");
const [priority,setPriority] = useState("all");
const [sortBy, setSortBy] = useState("none");






const filteredTasks = tasks.filter((task) => {
  const matchesStatus =
    status === "all" ||
    (status === "active" && !task.completed) ||
    (status === "completed" && task.completed);

  const matchesPriority =
    priority === "all" || task.priority === priority;

  const matchesSearch =
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.subject.toLowerCase().includes(search.toLowerCase());

  return matchesStatus && matchesPriority && matchesSearch;
});


const sortedTasks = [...filteredTasks];

if(sortBy === "dueDate"){
  sortedTasks.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));
}

if (sortBy === "priority") {
  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };

   sortedTasks.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

}




  return (
    
<section>

        <h2 className="mb-6 text-xl font-bold text-[#0F172A]">
            Your Tasks</h2>

           <div className="mb-5">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <select className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 sm:w-auto"
          value={status}
          onChange={(e) => {
          setStatus(e.target.value);
          setSearch("");
  }}
        >
          <option value = "all">All Status</option>
          <option value = "active">Active</option>
          <option value="completed">Completed</option>
        </select>

        <select className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 sm:w-auto"
           value={priority}
          onChange={(e) => {
          setPriority(e.target.value);
          setSearch("");
  }}
        >
          <option value="all">All Priority</option>
          <option value = "low">Low</option>
          <option value = "medium">Medium</option>
          <option value = "high">High</option>
        </select>

        <select className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 sm:w-auto"
         value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}>
           <option value="none">Sort by</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>



  <div className="space-y-4">

    
   {filteredTasks.length === 0 ? (
    <p className="py-10 text-center text-gray-500">
      No results found
    </p>
  ) : (
    sortedTasks.map((task) => (
    <div
      key={task.id}
    className={`min-w-0 rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5 ${
  task.completed ? "opacity-60" : "opacity-100"
}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#0F172A]">
            {task.title}
          </h3>

          <p className="mt-1 text-sm text-[#64748B]">
            {task.subject}
          </p>
        </div>

       <span
  className={`rounded-full px-3 py-1 text-xs font-semibold ${
    task.priority === "high"
      ? "bg-red-100 text-red-600"
      : task.priority === "medium"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-green-100 text-green-600"
  }`}
>
  {task.priority.toUpperCase()}
</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#64748B]">
        <span>Due {task.dueDate}</span>
        <span>•</span>
        <span>{task.estimatedHours} hours</span>
      </div>

    {task.priority === "high"
  ? "URGENT"
  : task.priority === "medium"
    ? "Complete it soon"
    : "Not urgent"}

<div className="mt-4 rounded-lg bg-slate-50 p-4">
  <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
    Notes
  </p>

  <p className="mt-1 text-sm text-[#334155]">
    {task.notes || "No notes added"}
  </p>
</div>

     <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
<button
  onClick={() => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === task.id
          ? { ...item, completed: !item.completed }
          : item
      )
    )
  }}
  className={`rounded-lg px-4 py-2 text-sm font-medium text-white cursor-pointer ${
    task.completed
      ? "bg-green-600 hover:bg-green-700"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {task.completed ? "Submitted" : "Complete"}
</button>


        <button className="rounded-lg  cursor-pointer bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200 border border-[#E2E8F0] px-4 py-2 text-sm font-medium text-[#334155]"
       onClick={() => setEditingTask(task)}>
          Edit
        </button>

        <button
        onClick={()=>{
          setTasks((prevTasks)=>{
            return prevTasks.filter((item) => item.id !== task.id)
          })
        }} className="rounded-lg bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200 border cursor-pointer border-red-200 px-4 py-2 text-sm font-medium text-red-600">
          Delete
        </button>
      </div>
    </div>
  )))}
</div>



</section>

      
    
  );
}

export default TaskList;
