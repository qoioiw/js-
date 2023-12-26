function func(a,b)
{
    console.log(this)
    console.log(a,b)
}

// const person ={
//     name:'itheima'
// }

// func.call(person,1,2)
// func.apply(person,[3,4])

// const bindFunc = func.bind(person,999)
// bindFunc(123)

const food ={
    name:'西红柿炒鸡蛋',
    eat(){
        console.log(this)
        setTimeout(()=>{
            console.log(this)
        },1000)
    }
}

food.eat() 

Function.prototype.myCall = function(){
    console.log("wolaile")
}

func.myCall()

