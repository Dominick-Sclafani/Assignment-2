//for each function
function myEach(arr,callback){
    for (let i =0; i<arr.length; i++){
        callback(arr[i])
    }
}
let arr = [2, 3, 4, 5]

myEach(arr, (item) => console.log(item)) //output 2 7 90 16


//map function
function myMap(arr,callback){
    let newarr = []
    for (let i =0; i < arr.length; i++){
        newarr.push(callback(arr[i]))
    }
    return newarr

}


const map = myMap(arr, x => x * 2)
console.log("Map is", map) //output (4) [4, 14, 180, 32]

//filter function

function myFilter(arr, callback){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        newarr[i] = callback(arr[i]);
        }
        return newarr

}

const filter = myFilter(arr, x => x > 3);
console.log(filter);// output is (4) [false, true, true, true]

//some function

function mySome(arr, callback){
    let newarr = [];
        for(let i = 0; i < arr.length; i++){
            
            if(newarr[i] = callback(arr[i])){
                return true;
            }
        }
    return false

}


const someResult = mySome(arr, x => x < 1);
console.log(someResult);//output false


//Every Function
function myEvery(arr, callback){
    let newarr = [];
        for(let i = 0; i < arr.length; i++){
            newarr[i] = callback(arr[i]);
            if(newarr[i] = callback(arr[i])){
                return true;
            }
            return false;

        }
}

    const everyResult = myEvery(arr, (x) => x >= 2);
    console.log(everyResult);//output true



//reduce()
function thisCallBack(element){  
    return element;
 }
 
 function myReduce(arr, callback){
    let newarr = [];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        newarr[i] = callback(arr[i]);
        sum += newarr[i];        
       
        }
        return sum;
 }
    console.log(myReduce(arr,thisCallBack))



//includes

function myIncludes(arr, target){
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  }
  
  console.log(myIncludes(arr, 2));//true
 
//indexOf()
  function myIndexOf(arr, target) {
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  console.log(myIndexOf(arr, 4));  
  
  
  //push

  function myPush(arr, elementToAdd) {
    var length = arr.length;
    arr[length] = elementToAdd;
    length++;
    arr.length = length;
    return length;
  }
  
  console.log(myPush(arr, 6))


  //last indexOf

  function myLastIndexOf(arr, target) {
    for(var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  console.log(myLastIndexOf(arr, 2));//output 2 



