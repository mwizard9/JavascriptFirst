function displayDate(){
    document.getElementById("date").innerHTML=Date();
}

let fname = "Manish";
let lname = 'Himalaya';
document.getElementById('name').innerHTML = fname + " " + lname ;

let answer1 = "My name is 'Manish Himalaya'";
let answer2 = 'i live in "madhyapur thimi"';
let answer3 = "my brother's name is 'anish HImalaya'";
document.getElementById('statement').innerHTML = 
answer1 + "<br>" +answer2 + "<br>" + answer3 ;

let x = "manish himalaya"; //x is astring
let y= new String("manish himalaya"); //y is an object
document.getElementById("object").innerHTML = (x==y);

let text="abcdkskekkkrkskdkkadkskkdkdasdwvvfddd";
document.getElementById('length').innerHTML=text.length;

let str = "Apple, Banana, Kiwi";
document.getElementById('slice').innerHTML=str.slice(7,13);
document.getElementById('sl').innerHTML=str.slice(7);