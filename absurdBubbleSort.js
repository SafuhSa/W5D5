const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1,el2,cb){
  reader.question(`is ${el1} greter that ${el2} Yes or No   `,(res) => {
    
    const result = res;
    if(result === 'y'){
      cb(true);
    }else{
     cb(false);
  }
  });
}

function absurdBubbleSort(arr, sortCompletionCallback){

  const sort = function outerBubbleSortLoop(madeAnySwaps){
    if(madeAnySwaps){
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    }else{
      console.log('else statment');
      // sortCompletionCallback(arr);
      return  sortCompletionCallback(arr);
    }
  };
  sort(true);
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < arr.length - 1){
      askIfGreaterThan(arr[i],arr[i+1],function (arg){
        if(arg === true){
          temp = arr[i];
          arr[i] =arr[i+1];
          arr[i+1] = temp;
          madeAnySwaps = true;  
          innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        } else {
          madeAnySwaps = false;  
          innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        }
      });
    }else{
      outerBubbleSortLoop(madeAnySwaps);
    }
  }
  
  absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
  
  // askIfGreaterThan(2,3,(arg) => console.log(`${arg}`));