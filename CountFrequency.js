function CountFrequnecy(arr){
    let fruency = {}
    for(let num of arr){
        if(fruency[num]){
            fruency[num]++
        }
        else{
            fruency[num] = 1 
        }
    }
    return fruency;

}

console.log(CountFrequnecy([1,2,1,12,22,2,2,22,33]));
