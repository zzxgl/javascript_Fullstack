// enum Direction {
//   Up ='UP',
//   Down ='Down',
//   Left = 'Left',
//   Right ='Right'
// }

// console.log(Direction.Down) //Down

// 异构枚举 存放多种不同的数据类型
enum yg{
  No = 0,
  Yes = 'Yes'
}

// 反向映射 key<=>value
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// console.log(Direction.Up)  //0  默认 value=0 
// console.log(Direction[Direction['Up']])  //Up

// 联合枚举
// 枚举的对象可以指明为其他变量的类型
// enum Direction {
//     Up,
//     Down ='Down',
//     Left = 'Left',
//     Right ='Right'
// }
// const aaa:number = 0
// console.log(aaa === Direction['Up'])  //true
// type c = 0 //定义数据的类型 c的类型为0 
// declare let bbb:c
// // bbb = 1 //报错
// bbb = Direction['Up']  // bbb = 0
// console.log(bbb)

// declare let aaa:Direction  //aaa的类型为Direction
// enum Animal {
//   Dog,
//   Cat
// }
// aaa = Direction.Up //aaa = 0
// aaa = Animal.Dog  //报错


// 枚举对象合并
enum Direction {
    Up,
    Down,
    Left,
    Right
}
enum Direction {
  Center = 1
}



