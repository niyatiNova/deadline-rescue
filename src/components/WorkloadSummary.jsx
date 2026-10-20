const WorkloadSummary = ({tasks}) => {

const activeTasks = tasks.filter((task) => !task.completed);
const completedTasks = tasks.filter((task)=> task.completed);
const remainingHours = activeTasks.reduce((total,task) => total + Number(task.estimatedHours || 0),
0
);

const urgentTasks = activeTasks.filter((task)=> task.priority === "high");


  return (
    <div 
className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 sm:px-6 lg:grid-cols-4 lg:px-8"
>
      
      
      <div 
className="flex min-w-0 flex-col justify-between gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 sm:h-[130px] sm:p-5"
>
        <p className="text-sm font-medium text-[#334155]">
          ACTIVE TASKS
        </p>

        <p className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
          {activeTasks.length} Tasks
        </p>
      </div>

      
      <div 
className="flex min-w-0 flex-col justify-between gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 sm:h-[130px] sm:p-5"
>
        <p className="text-sm font-medium text-[#334155]">
          COMPLETED
        </p>

        <p className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
          {completedTasks.length} Tasks
        </p>
      </div>

    
      <div 
className="flex min-w-0 flex-col justify-between gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 sm:h-[130px] sm:p-5"
>
        <p className="text-sm font-medium text-[#334155]">
          REMAINING
        </p>

        <p className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
          {remainingHours} Hrs
        </p>
      </div>

      
      <div 
className="flex min-w-0 flex-col justify-between gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 sm:h-[130px] sm:p-5"
>
        <p className="text-sm font-medium text-[#334155]">
          URGENT
        </p>

        <p className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
          {urgentTasks.length} Tasks
        </p>
      </div>

    </div>
  )
}

export default WorkloadSummary