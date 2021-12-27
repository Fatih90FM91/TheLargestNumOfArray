// function largestOfFour(arr) {
//     // You can do this!
//     return arr;
//   }
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//   //Returns [5,27,39,1001]



function largestOfFour(arr){
    let maxArr=[];
   
 
   
    for (let i = 0; i < arr.length; i++) {
    
       
        maxArr.push(Math.max(...arr[i]));
       
      
    }

   
    console.log(maxArr);


    return arr;
}




largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [100, 40, 37, 30],[32, 40, 37, 50], [1000, 1001, 857, 1],[1000, 1001, 857, 1]]);