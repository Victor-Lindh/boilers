import React from 'react'

const CreateButton = (props) => {
  const { onClick } = props
  return (
    <button onClick={onClick}>Create</button>
  )
}

export default CreateButton