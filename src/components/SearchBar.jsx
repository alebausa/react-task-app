import React from 'react'

export default function SearchBar(props) {
  const { onSearch } = props;

  return (
    <div>
      <input type="text" placeholder="Search task" onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}
