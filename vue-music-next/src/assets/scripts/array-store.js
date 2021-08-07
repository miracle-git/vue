import storage from 'good-storage'

export const save = (key, compare, item, max) => {
  const items = storage.get(key, [])
  const index = items.findIndex(compare)
  if (index > -1) return
  items.unshift(item)
  if (max && items.length > max) {
    items.pop()
  }
  storage.set(key, items)
  return items
}

export const remove = (key, compare) => {
  const items = storage.get(key, [])
  const index = items.findIndex(compare)
  index > -1 && items.splice(index, 1)
  storage.set(key, items)
  return items
}

export const load = (key) => {
  return storage.get(key, [])
}
