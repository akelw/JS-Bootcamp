let sentence = ''
let words = ['this ','is ','JavaScript ','Bootcamp!'];
function createSentence(arr) {
    for(let i = 0; i<arr.length; i++){
        sentence+= arr[i]
    }
    return sentence
}
console.log(createSentence(words))