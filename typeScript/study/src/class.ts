// 抽象类
// abstract class Animal {
//   abstract makeSound():void;
//   move():void {
//     console.log('roaming this earch')
//   }
// }

// class Cat extends Animal {  //继承Animal抽象类
//   makeSound() {
//     console.log('miao miao')
//   }
// }
// // const animal = new Animal() //报错
// const cat= new Cat()
// cat.makeSound()

// 访问限定符
class Cat {
  public run() {
    console.log('running')
  }
  private eat() {
    console.log('eating')
  }
  protected sleep() {
    console.log('sleeping')
  }
}
class GTR extends Cat{
  init() {
    this.run()
    this.sleep()
  }
}
const cat = new Cat()
// cat.run()
// cat.eat()  //报错 private定义的属性 只能在Cat类里面访问
// cat.sleep()   //报错 只能在类的内部和子类中调用
const gtr = new GTR()
const car = new Cat()
car.run()
gtr.init()


// class可以作为接口
// export default class Props {
//   public children: Array<React.ReactElement<any>>
// }

// public static defaultProps = new Props()
// props:　Props