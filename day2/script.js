function toCelsius(f){
    return (5/9) * (f-32);
}
document.getElementById("celsius").innerHTML=toCelsius(132);