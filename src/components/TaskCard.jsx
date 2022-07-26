import React, { useState } from 'react'

export default function TaskCard(props) {
  const { task: { title, done, _id}, onDelete } = props;
  const [isDone, setDone] = useState(done);
  
  const handleDone = () => {
    setDone(prev => !prev);
    onDelete(_id);
  }

  return (
     <div className="task">
          <p>{title}</p>
          <p>{!isDone && <button onClick={handleDone}>Done</button>}</p>
    </div>
  )
}
