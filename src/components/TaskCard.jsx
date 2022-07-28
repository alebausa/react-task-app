import React from 'react'

export default function TaskCard(props) {
  const { task: { title, _id }, onDelete } = props;

  return (
     <div className="task">
       <div>{title}</div>
        <button className="btn" onClick={() => onDelete(_id)}>🗑</button>
     </div>
  )
}
