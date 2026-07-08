function sum(arr) {
    let add=0 ;
    for (let num of arr) {
        add += num;
    }

    return add;
}

console.log(sum([1, 2, 3, 4, 5]))