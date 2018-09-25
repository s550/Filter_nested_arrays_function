function filteredArray(arr, elem) {
  let newArr = [...arr]; 
  for(let i = 0; i < newArr.length; i++){
    for(let z = 0; z < newArr[i].length; z++){
      if(newArr[i][z] == elem){
      //both for loops loop first over the elements in the array and the second loops over individual sub arrays
        newArr.splice(i,1);
        i--;
        break;
      }
    }
  
    }
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
