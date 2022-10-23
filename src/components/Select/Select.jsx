import React, { useState } from 'react'

const Select = ({ options = [{ value: '', label: '-- Choose --'}] }) => {
  const [value, setValue] = useState('')
  console.log('select value', value)
  console.log('options', options)
  return (
    <div>
      <label for='array'>-- Choose --</label>
      <select
        name='array'
        onChange={(e) => setValue(e.value)}
        id='select1'
      >
        {options.map(option => {
          return (
            <option
              key={option.value}
              value={option.value}
              id={option.value}
              name='array'
              placeholder='array'
            >
            {option.label}
          </option>
          )
        })}
      </select>
    </div>

  )
}

export default Select