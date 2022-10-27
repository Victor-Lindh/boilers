import React, { useState } from 'react'
import TextBox from './TextBox'
import Select from './Select'
import styles from '../../styles/Home.module.scss'
import { categories } from 'src/data'

const App = () => {
  const [searchQuery, setQuery] = useState({
    type: 'array',
    category: 'sports',
    subCategory: 'football',
    group: 'NFL',
    dataLength: 'all',
  })

  const currentCategoryData = categories[searchQuery.category]
  const availableSubcategoryData = currentCategoryData.filter(item => item.subCategory === searchQuery.subCategory)
  const groupData = availableSubcategoryData.find(x => x.data.value === searchQuery.group)
  const data = groupData?.data.teams

  // return <div></div>
  return (
    <div className={styles.container}>
      <section className={styles.selectGroup}>
        <Select
          options={[
            { value: 'array', label: 'Arrays' },
            { value: 'object', label: 'Objects' },
          ]}
          label='Type of data'
          onChange={e => setQuery({
            ...searchQuery,
            type: e.target.value
          })}
          />
            <Select
              options={[
                { value: 'sports', label: 'Sports' },
                { value: 'animals', label: 'Animals' },
              ]}
              label='Category'
              onChange={e => setQuery({
                ...searchQuery,
                category: e.target.value
              })}
            />
        <Select
          options={[
            { value: 'football', label: 'Football' },
            { value: 'basketball', label: 'Basketball' },
          ]}
          label='Subcategory type'
          onChange={e => setQuery({
            ...searchQuery,
            subCategory: e.target.value,
            group: currentCategoryData.find(item => item.data.subCategory === e.target.value).data.value
          })}
          />
        <Select
          options={availableSubcategoryData.map(item => item.data)}
          label='Group'
          onChange={e => setQuery({
            ...searchQuery,
            group: e.target.value
          })}
          />
        <Select
          options={[
            { value: 'all', label: 'Show all items' },
            { value: '5', label: 'First 5 items' },
            { value: '10', label: 'First 10 items' },
            { value: '15', label: 'First 15 items' },
            { value: '20', label: 'First 20 items' },
          ]}
          label='Part of data'
          onChange={e => setQuery({
            ...searchQuery,
            dataLength: e.target.value
          })}
          />
      </section>
      <TextBox data={data} searchQuery={searchQuery} />
    </div>
  )
}

export default App