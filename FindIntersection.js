function Intersection(arr1,arr2){
    let set = new Set(arr1)
    let result = []

    for(let num of arr2){
        if(set.has(num)){
            result.push(num)
        }
    }
    return result;
}

console.log(Intersection([1,2,3,4,5],[4,5,6,7]));
