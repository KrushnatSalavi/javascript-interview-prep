const isPalindrome = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const revstring = [...cleanStr].reverse().join("")

    return cleanStr === revstring
}
console.log(isPalindrome("sir"));

console.log(isPalindrome("Krushna"));

const NumPalindrome = function (Num) {

    let strNum = Num.toString()
    let reverseNum = [...strNum].reverse().join('')

    return strNum === reverseNum

}

console.log(NumPalindrome(121));
