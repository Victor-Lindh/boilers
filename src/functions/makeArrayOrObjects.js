export default function makeArrayOrObjects (searchQuery = {}, data = []) {
  const { type, group, category } = searchQuery
  const typeStart =  type === 'array' ? '[' : '['
  const typeEnd = type === 'array' ? ']' : ']'
  
  const prefix = {
    'sports' : 'team',
    'animals' : 'name'
  }

  if (type === 'array') {
    return `const ${group} = ${typeStart}${data?.map(d => `'${d}'`).join(', ')}${typeEnd}`
  } else {
    return `const ${group} = ${typeStart}${data?.map(d => `{ ${prefix[category]}: '${d}' }`).join(', ')}${typeEnd}`
  }
};
