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

  const prefix = {
    animals: 'animals',
    sports: 'teams'
  }

  console.log('prefix', prefix[searchQuery.category])
  console.log(searchQuery)
  // Main category
  const currentCategoryData = categories[searchQuery.category]
  console.log('currentCategoryData', currentCategoryData)
  // Sub category
  const availableSubcategories = currentCategoryData.map(category => category.data.subCategory)
  console.log('availableSubcategoryData', availableSubcategories)
  // Group category
  const groupData = currentCategoryData.filter(x => x.data.value === searchQuery.group)
  console.log('groupdata', groupData)

  const data = groupData[0]?.data?.[prefix[searchQuery.category]]
  console.log('data', data);
  // return <div></div>
  return (
    <div className={styles.container}>
      <section className={styles.selectGroup}>
        <Select
          options={[
            { value: 'array', label: 'Plain array' },
            { value: 'object', label: 'Array of objects' },
          ]}
          label='Type of data'
          onChange={e => setQuery({
            ...searchQuery,
            type: e.target.value
          })}
          />
            <Select
              options={Object.keys(categories).map(category => {
                return {
                  value: category,
                  label: `${category.charAt(0).toUpperCase()}${category.slice(1)}`
                }
              })}
              label='Category'
              onChange={e => setQuery({
                ...searchQuery,
                category: e.target.value,
                subCategory: categories[e.target.value][0].subCategory,
                group: categories[e.target.value][0].data.value
              })}
            />
        <Select
          options={availableSubcategories.map(item => {
            return {
              value: item,
              label: `${item.charAt(0).toUpperCase()}${item.slice(1)}`
            }
          })}
          label='Subcategory type'
          onChange={e => setQuery({
            ...searchQuery,
            subCategory: e.target.value,
            group: currentCategoryData.find(item => item.data.subCategory === e.target.value).data.value
          })}
          />
        <Select
          options={groupData.map(item => item.data)}
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
            { value: '20', label: 'First 20 items' }
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