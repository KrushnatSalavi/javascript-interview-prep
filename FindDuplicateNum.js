function findDuplicate(arr){
    let seen = new Set();
    let duplicate = new Set();
    

    for(let num of arr){
        if(seen.has(num)){
            duplicate.add(num)
        }

        else{
            seen.add(num)
        }
    }
    console.log('Original Values:',seen);
    

    return [...duplicate]
}

console.log(findDuplicate([1,2,3,4,1,5,2,3]));
