
  function calculateMinCost(arr){
  let sum = 0
  let n = arr.length

  while(n>1){
    arr.sort()
    let firstTwo = arr[0]+arr[1]
    sum+=firstTwo
    arr.splice(0,2,firstTwo)
    n--
  }

  console.log(sum)
}

let arr = [4,2,7]
calculateMinCost(arr)
  
  
  
}  
