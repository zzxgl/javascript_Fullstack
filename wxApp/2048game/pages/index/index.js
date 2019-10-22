const app = getApp()
const Grid = require('./grid.js')
Page({
  data: {
    num: null
  },
  onLoad:function(){
    const gameGrid = new Grid(4);
    //初始化两个格子
    this.game = gameGrid;
    this.addRandomData();
    this.addRandomData();
    this.setData({
      num:gameGrid.grid
    })
  },
  addRandomData:function(){
    let cell = this.game.selectCell();
    console.log(cell);
    this.game.grid[cell.i][cell.j] = Math.random() >0.5 ? 2 : 4;
  },
  game:null,
  startX:0,
  startY:0,
  endX:0,
  endY:0,
  touchstart: function(event){
    console.log(this.startX, this.startY, this.endX, this.endY)
    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  },
  touchmove:function(event){
    console.log(event)
    const touch = event.touches[0];
    this.endX = touch.clientX;
    this.endY = touch.clientY;
  },
  touchend:function(event){
    console.log(this.startX,this.startY,this.endX,this.endY)
    const disX = this.startX - this.endX;
    const disY = this.startY - this.endY;
    const absDisx = Math.abs(disX);
    const absDisy = Math.abs(disY);
    if (absDisx>10 || absDisy>10){
      // 0 :上   1：右  2：下  3：左
      var direction = absDisx > absDisy ? (disX < 0 ? 1 :3) : (disY < 0 ?2:0);
      console.log(direction)
      this.move(direction)
    }
  },
  move:function(direction) {
    // 数字合并
    this.combine()
  },
  combine:function(){
    // 数字滑动 把数字靠边
    let res= this.slideNumber(['',2,'',2]);
    console.log(res,"数字靠边")
  },
  slideNumber: function(arr){
    // 输入： ['',2,'',2]  -> 输出：[2,2,'','']
    let current = 0;
    for(let i =0;i<arr.length;i++){
      if(arr[i] !== ''){
        arr[current] = arr[i]
        current++;
      }
    }
    //  [2,2,'',2];
    for(let j =current;j<arr.length;j++){
      arr[j] ='';
    }
    return arr;
  }
})