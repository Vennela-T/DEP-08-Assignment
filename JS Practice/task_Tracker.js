const tasks = [{ taskName: "Write report", completed: true, priority: 2 },
               { taskName: "Attend meeting", completed: false, priority: 3 }, 
               { taskName: "Fix bug", completed: false, priority: 1 }, 
               { taskName: "Update website", completed: true, priority: 4 }];

//    Identify the first task with a high priority (for example, priority less than 3).
const firstTask = tasks.find(item => item.priority<3);
console.log(firstTask);

// Find the index of the first task that is not completed.
const indexOfFirstIncompleteTask = tasks.findIndex(item => item.completed === false);
console.log(indexOfFirstIncompleteTask);

// Count how many tasks have been completed.
const countOfCompletedTasks = tasks.reduce((count, tasks) => tasks.completed ? count+=1 : count, 0);
console.log(countOfCompletedTasks);

// print all tasks names
tasks.forEach(item =>
    console.log(item.taskName)
);