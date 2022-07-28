import './App.css';
import React, { useState } from 'react';
import taskData from './tasks.json';
import TaskCard from './components/TaskCard';
import SearchBar from './components/SearchBar';

function App() {
  const [pendingTasks, setPendingTasks] = useState(taskData);
  const [filteredTasks, setFilteredTasks] = useState(taskData);

  const handleDelete = (id) => {
    const updatedList = pendingTasks.filter(elem => elem._id !== id);
    setPendingTasks(updatedList);
    setFilteredTasks(updatedList);
  }

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setFilteredTasks(pendingTasks)
    } else {
      const filtered = pendingTasks.filter(elem => elem.title.toLowerCase().includes((searchValue).toLowerCase()));
      setFilteredTasks(filtered)
    }
  }

  return (
    <div className="App">
      <h1>To-do list</h1>
      <SearchBar onSearch={handleSearch} />
      {filteredTasks.map(elem => {
        return <TaskCard key={elem._id} task={elem} onDelete={handleDelete} />
      })}
    </div>
  )

}

export default App;