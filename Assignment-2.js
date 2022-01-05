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
    for(let i=0; i<arr.length; i++){

        callback(arr[i]);
        if (callback = true){
            return true
        }
        else{
            return false
        }



    }


}

const some= mySome(arr, x => x < 1 );
console.log(some) //output True


//Every Function

//function myEvery

