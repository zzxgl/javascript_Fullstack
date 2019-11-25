export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function findIndex(list, song) {
  // js自带findIndex 先判断当前元素是否存在数组中 return下标
  return list.findIndex((item) => {
    return item.id === song.id
  })
}