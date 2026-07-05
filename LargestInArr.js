const arr = [18,2,54,6,33,0]

let MaxNum = Math.max(...arr)

console.log(MaxNum)

//But In Big Array reduse is a safe 

let Max = arr.reduce((max ,curr) =>{
    return curr > max ? curr:max
},arr[0])

console.log(Max)