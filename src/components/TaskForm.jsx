import { useState } from "react";



const TaskForm = ({
  setTasks,
  editingTask,
  setEditingTask}) => {


const [title, setTitle] = useState(editingTask?.title ?? '');
const [subject, setSubject] = useState(editingTask?.subject ?? '');
const [dueDate, setDueDate] = useState(editingTask?.dueDate ?? '');
const [estimatedHours, setEstimatedHours] = useState(
  editingTask ? String(editingTask.estimatedHours) : ''
);
const [priority, setPriority] = useState(editingTask?.priority ?? '');
const [notes, setNotes] = useState(editingTask?.notes ?? '');



const handleSubmit = (e) => {
  e.preventDefault();


   if (
    !title.trim() ||
    !subject.trim() ||
    !dueDate ||
    !estimatedHours ||
    Number(estimatedHours) <= 0 ||
    !priority ||
    !notes.trim()
  ) {
    alert("Please fill in all required details.");
    return;
  }

  const taskDetails = {
    title,
    subject,
    dueDate,
    estimatedHours: Number(estimatedHours),
    priority,
    notes,
  };

  if (editingTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTask.id
          ? { ...task, ...taskDetails }
          : task
      )
    );

    setEditingTask(null);
  } else {
    const newTask = {
      id: Date.now(),
      ...taskDetails,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  setTitle('');
  setSubject('');
  setDueDate('');
  setEstimatedHours('');
  setPriority('');
  setNotes('');
};

  
  
  return (
    <>
     <div className="h-fit rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-6">

        
<h2 className="mb-6 text-xl font-bold text-[#0F172A]">
  {editingTask ? "Edit Task" : "Add New Task"}
</h2>


         <form 
         onSubmit = {handleSubmit}
         className="space-y-5">

            <div>
                <label className="mb-2 block text-sm font-medium text-[#334155]">
                    Task Title
                </label>

            <input type="text" 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            placeholder="e.g. Pipeline assignment "
             className="w-full min-w-0 rounded-lg border border-[#E2E8F0] px-4 py-3 outline-none focus:border-blue-500"/>
            </div>

            <div>
                 <label className="mb-2 block text-sm font-medium text-[#334155]"> 
                    Subject
                </label>

                <input type="text"
                value={subject}
                onChange={(e)=> setSubject(e.target.value)}
                placeholder="e.g. Computer Architecture" 
              className="w-full min-w-0 rounded-lg border border-[#E2E8F0] px-4 py-3 outline-none focus:border-blue-500"
          />

            </div>

            <div>
                 <label className="mb-2 block text-sm font-medium text-[#334155]">
                    Due Date
                    </label>
                <input type="date"
                value={dueDate}
                onChange={(e)=> setDueDate(e.target.value)}
               className="w-full min-w-0 rounded-lg border border-[#E2E8F0] px-4 py-3 outline-none focus:border-blue-500"
          />
            </div>


            <div>
                 <label className="mb-2 block text-sm font-medium text-[#334155]">
            Estimated Hours
          </label>

           <input
            type="number"
            value={estimatedHours}
            onChange={(e)=> setEstimatedHours(e.target.value)}
            placeholder="e.g. 2.5"
            className="w-full min-w-0 rounded-lg border border-[#E2E8F0] px-4 py-3 outline-none focus:border-blue-500"
          />
            </div>


            <div>
                 <label className="mb-2 block text-sm font-medium text-[#334155]">
            Priority
          </label>


        <select value={priority}
        onChange={(e)=> setPriority(e.target.value)}
        className="w-full min-w-0 rounded-lg border border-[#E2E8F0] px-4 py-3 outline-none focus:border-blue-500">
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-[#334155]">
            Notes
          </label>

            <textarea
            value={notes}
            onChange={(e)=> setNotes(e.target.value)}
            rows="4"
            placeholder="Add any extra information..."
            className="min-h-[120px] w-full resize-y rounded-lg border border-[#E2E8F0] p-4"
          ></textarea>

            </div>

          <button
  type="submit"
  className="w-full min-w-0 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
>
  {editingTask ? "Save Changes" : "Add Task"}
</button>
            
         </form>
    </div>
    
    
    </>
  );
}

export default TaskForm;
