function create(obj){
   //返回一个实例对象
   //对象的原型对象是Obj 
    function F(){}
    return new F()
    F.prototype = obj
}
var Person = { //提供一个对象的模板
    name:'noname',
    age:'0',
    greet: function(){
        console.log(`Hello, ${this.name}`);
    }
}
var tom = create(Person);
tom.name='tom';
tom.greet();