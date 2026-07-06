const removeDuplicate = function (arr) {

    const uniqueNum = arr.filter((item, index) => {
        return arr.indexOf(item) === index;

    })

    console.log(uniqueNum)
}

const uniquenum = removeDuplicate([1,22,1,2,33,22,65,55,2])

console.log(uniquenum);
