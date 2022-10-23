import React from 'react'
import style from './textbox.module.scss'

const TextBox = ({ text = '' }) => {
  return (
    <textarea
      rows='13'
      cols='35'
      className={style.container}
      defaultValue={text}
    />
  )
}

export default TextBox