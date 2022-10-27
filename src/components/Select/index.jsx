import React from 'react'
import select from './select.module.scss'

const Select = ({
  options = [{ value: '', label: '-- Choose --'}],
  label = 'Select',
  onChange
}) => {
  return (
    <div className={select.selectContainer}>
      <label htmlFor='select'>{label}</label>
      <select
        className={select.select}
        name='select'
        onChange={onChange}
        id='select'
      >
        {options.map(option => {
          return (
            <option
              key={option.value}
              value={option.value}
              id={option.value}
              name='select'
              defaultValue={option.defaultChecked || false}
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