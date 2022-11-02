import React, { useState, useEffect } from 'react'
import makeArrayOrObjects from 'src/functions/makeArrayOrObjects'
import style from './textbox.module.scss'

const TextBox = ({
  data = [],
  searchQuery
}) => {
  const [dataset, setData] = useState(null)
  const slicePart = { 
    'all' : data.length,
    '5' : 5,
    '10' : 10,
    '15' : 15,
    '20' : 20
  }
  const sliceLength = slicePart[searchQuery.dataLength]

  useEffect(() => {
    if (data && data !== 'undefined') setData((data || []).slice(0, sliceLength))
  }, [searchQuery])

  return Array.isArray(dataset) ? (
    <textarea
      rows='15'
      cols='100'
      className={style.container}
      value={makeArrayOrObjects(searchQuery, dataset)}
      readOnly
    />
  ) : 'No data yet!'
}

export default TextBox