let Name = "Krushna";

console.log(Name);

let revstring = [...Name].reverse().join("")

console.log(revstring)


//for Number


const reverseNum = function(num){
    rev = parseFloat(num.toString().split("").reverse().join(''))
    console.log(rev*Math.sign(num));
    
}

reverseNum(123456)
