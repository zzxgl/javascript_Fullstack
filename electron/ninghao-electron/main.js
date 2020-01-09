const { app, BrowserWindow, ipcMain } = require('electron')
ipcMain.on('greet',(event,args) => { 
  console.log(args)
  event.sender.send('gret',{
    message:'hi render ~'
  })
})
const path = require('path')
// electroon 内置了窗口
// 让electron支持热更新
require('electron-reload')(__dirname, {
  electron:path.join(__dirname, 'node_modules','.bin','electron')
}) //绝对路径

let win; //窗口  一个应用里面独立的进程
const createWindow = () => {
  win = new BrowserWindow({  //实例化窗口对象
    width:960,
    height:600,
    minWidth:830,
    minHeight:500,
    backgroundColor:'#f8f8f8',
    webPreferences:{
      nodeIntegration: true
    }
  });
//   win.loadURL(`file://${__dirname}/main.html`);  //引入URL 
  win.loadURL('http://192.168.31.7:3000/')
}
app.on('ready',createWindow)