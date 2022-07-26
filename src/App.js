import './App.css';
import React, { useState } from 'react';
import taskData from './tasks.json';
import TaskCard from './components/TaskCard';

function App() {
  const [tasks, setTasks] = useState(taskData);

  const handleDone = (id) => {
    const filtered = tasks.filter(elem => elem._id !== id)
    setTasks(filtered);
  }

  return (
    <div className="App">
      <h1>Task list</h1>
      {tasks.map(elem => {
        return <TaskCard task={elem} key={elem._id} onDelete={handleDone} />
      })}
    </div>
  );
}

export default App;
