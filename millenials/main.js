// const age = 30
// const timeSpan = 25
// const futureAge = age + timeSpan
// const name = "Biff"
// const generationStereotype = "millenial"
// const dadJoke = "milleni-old"


// const sentence = `Hi. My name is ${name} and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} I'll be ${futureAge}! I guess that means Ill be a ${dadJoke} then. Ha ha!`

// console.log(sentence)
// // "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"

// /write a function that accepts the foodArray as an argument and returns a new array containing only the foods that begin with the letter a and the letter t
const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]

const myFavoriteFoods = (array) =>{
let newArray = []
  for (let blah = 0; blah < array.length; blah++){
    const element = array[blah];
    if(element.startsWith("a") || element.startsWith("t")){
      newArray.push(element)
    }

  
}
return newArray
}
console.log(myFavoriteFoods(foodArray))

