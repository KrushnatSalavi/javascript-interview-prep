function flattenArr(arr){
    let result = []

    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArr(item))
        }

        else(
            result.push(item)
        )
    }
    return result
}

console.log(flattenArr([1,[2,3],4,[5]]));
