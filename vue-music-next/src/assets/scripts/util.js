// 洗牌算法
export const shuffle = (arr) => {
  const res = arr.slice()
  for (let i = 0, len = res.length; i < len; i++) {
    const j = randomInt(i)
    swap(res, i, j)
  }
  return res
}

export const randomInt = (num) => {
  return Math.floor(Math.random() * (num + 1))
}

export const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export const formatTime = (interval) => {
  interval = interval | 0
  const minute = ((interval / 60 | 0) + '').padStart(2, '0')
  const second = ((interval % 60 | 0) + '').padStart(2, '0')
  return `${minute}:${second}`
}
