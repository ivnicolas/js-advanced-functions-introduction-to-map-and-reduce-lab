// Your code here
function mapToNegativize(array){
    return array.map(x => x * -1)
}

function mapToNoChange(array){
    return array.map(x => x)
}

function mapToDouble(array){
    return array.map(x => x * 2)
}

function mapToSquare(array){
    return array.map(x => x ** 2)
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const allTrue = (num) => Boolean(num) === true 
// const allTrue = (array) => array.every((num) => Boolean(num) === true )
function reduceToTotal(array, startingPoint= 0){
       return array.reduce(reducer, startingPoint)
}

function reduceToAllTrue(array){
    if ( array.every((num) => Boolean(num) === true ) ){
        return true 
    }
    else {
        return false 
    }
}

function reduceToAnyTrue(array){
    for (let i = 0; i < array.length; i++ ) {
        if (array[i]) return true
      }
      return false
}