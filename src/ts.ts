import { userInfo } from "os";




declare namespace myLib{
    function makeGreeting(s:string):string;
    let numberOfGreeting : number;
}

declare function getName(n:string) : string;

// ! cannot understand where the above code will be useful
interface user{
    name:string,
    age:number
}

interface user_profile extends user{
    profile:string,
    id:string,
    email:string,
    mobile:string
}

// var userInfo : user_profile = {
//     name:"shiva",
//     age:21,
//     profile:"",
//     email:"siva@gmail.com",
//     mobile:"+919677573318",
//     id:"1"
// };

type role = string | (()=> string ) |number;

var role_1 :role = 0;
var role_2 :role = "Admin";
var role_3 :role = ()=>"USER";

console.log("role_1",role_1);
console.log("role_2",role_2);
console.log("role_3",role_3());

// console.log("interface example",userInfo);

class MainClass {
 
    constructor(){
       
    }
    greet : user = {
        name:"Ravi kumar",
        age:21
    };
    
    public get userInfo():user {
        return this.greet;
    }
    public setuser(info:user){
        this.greet = info;
    } 
    
}

class SubClass extends MainClass{

    
    userName(){
        return this.userInfo.name;
    }
    
}

var instance = new SubClass();
var param : user = {name:"Snagu",age:85};
instance.setuser(param);
console.log(instance.userName());
