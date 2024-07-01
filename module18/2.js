function calculateTotalCartValue(){
  let totalValue=0;
  for(let i=0; i<arguments.length;i++){
   totalValue += arguments[i];
  
  }
  console.log(`The total cart Value is ${totalValue} `);
  return true;
}

 calculateTotalCartValue(125,34,56);