function forLoop(array){

  for ( let i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`);
    } else { 
      array.push(`I am ${i} strange loops.`);
    }
  }
   return array;
}

function whileLoop(number){
  let countDown = number;
  while (countDown > 0){
    console.log(--countDown);
  }
  return 'done';
}


function doWhileLoop(num){
  
  
}