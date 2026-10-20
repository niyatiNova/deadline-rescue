function Header() {
  return (
    <header className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Deadline Rescue
        </h1>

        <p className="mt-1 text-slate-500">
          Stay ahead of your academic deadlines
        </p>
      </div>

      <button className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto">
        + Add Task
      </button>
    </header>
  );
}

export default Header;