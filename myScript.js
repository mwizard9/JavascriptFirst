function manish(){
    document.getElementById("demo").innerHTML="my name is manish himalaya";
    document.getElementById("demo2").innerHTML="my name is prashant stha";
}
function anish(){
    document.getElementById("open").innerHTML="hello,how are you?";
}

document.write(11+60);
window.alert(22+2);
alert(12+5);

console.log(22+12);

let x,y,z;
x=10;
y=11;
z=x+y;
document.getElementById("state").innerHTML="The value of z is " + z + ".";

var a, b ;
a = 4+6;
b=x*5;
document.getElementById("simple").innerHTML=b;

let text1= "Manish";
let text2= "Himalaya";
let text3 = text1 + " " + text2 ;
document.getElementById("name").innerHTML= text3;

let name1 = "Bibash ";
 name1 += " Giri";
 document.getElementById("name1").innerHTML=name1;

let m= 5+5;
let n = "5"+5;
let o = "hello"+5;
document.getElementById("string").innerHTML= m + "<br>" + n + "<br>" + o;

const person = {
    firstName : "Manish",
    lastName : "Himalaya",
    age : 20,
    eyecolor : black
};

document.getElementById("info").innerHTML = person.firstName + person.lastName + "is"  + person.age + "years old";