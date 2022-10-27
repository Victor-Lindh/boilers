import React, { useState, useEffect } from 'react'
import style from './textbox.module.scss'

const TextBox = ({
  data = [],
  searchQuery
}) => {
  const [dataset, setData] = useState(null)
  const typeStart = searchQuery.type === 'array' ? '[' : '{'
  const typeEnd = searchQuery.type === 'array' ? ']' : '}'
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
      value={`const ${searchQuery.group} = ${typeStart}${dataset.map(d => `'${d}'`).join(', ')}${typeEnd}`}
      readOnly
    />
  ) : 'No data yet!'
}

export default TextBox