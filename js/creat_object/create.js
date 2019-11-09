function create(obj){
   //返回一个实例对象
   //对象的原型对象是Obj 
    function F(){}
    F.prototype = obj
    return new F()
}
var Person = { //提供一个对象的模板
    name:'noname',
    age:'0',
    greet: function(){
        console.log(`Hello, ${this.name}`);
    }
}
var tom = create(Person);
console.log(tom.__proto__)
tom.name='tom';
tom.greet();