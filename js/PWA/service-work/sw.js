console.log('begin')
const CACHE_NAME = 'PWA-1.0'
// 请求路径  service-work下面

const cacheList = [  //要缓存的列表
  './pic.png',
  './bundle.js'
]

// cacheStorage 
this.addEventListener('install', (event) => {
  // install => activated  等缓存添加到cacheStorage完 再进行激活(acticated)
  event.waitUntil(
    caches.open(CACHE_NAME)  //打开
      .then(cache => {
        return cache.addAll(cacheList)
      })
  )
})
// 监听请求事件
this.addEventListener('fetch', (event) => {
  event.respondWith(
    // 如果缓存里面有  
    caches.match(event.request)
      .then(resp => {
        if (resp) {
          console.log(event.request.url, '有缓存')
          return resp
        }
        else {
          console.log(event.request.url,'没缓存')
          return fetch(event.request)
          .then( res => {
            // service-work 拿到请求的结果
            // 再把请求的结果添加到缓存里面
            return caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request,res)
              return res
            })
          })
        }
      })
  )
})