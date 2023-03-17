document.getElementById('phonePlass',).addEventListener('click',function(){
   const qunNumber = document.getElementById('numAddSub');
   const price = document.getElementById('pPrice');
   const qunNumberString = qunNumber.value;
   const qunNumberStringToInt =parseInt(qunNumberString);
   const addQunNumber = qunNumberStringToInt +1;
   qunNumber.value =addQunNumber; 
   const newPrice = addQunNumber * 1219;
   price.innerText =newPrice;
})
document.getElementById('cpbtn',).addEventListener('click',function(){
   const qunNumber = document.getElementById('cnumAddSub');
   const qunNumberString = qunNumber.value;
   const qunNumberStringToInt =parseInt(qunNumberString);
   const addQunNumber = qunNumberStringToInt +1;
   qunNumber.value =addQunNumber; 
})
///////////////////////////////////////////////////////
// button for sub
document.getElementById('phoneSub').addEventListener('click',function(){
   const qunNumber = document.getElementById('numAddSub');
   const price = document.getElementById('pPrice');
   const qunNumberString = qunNumber.value;
   const qunNumberStringToInt =parseInt(qunNumberString);
   const addQunNumber = qunNumberStringToInt - 1;
   const newPrice = addQunNumber * 1219;
   price.innerText =newPrice;
   if(addQunNumber <1 ){
    alert('You Not Parches less Than 1 Item');
    return  qunNumber.value = 1 , price.innerText = 1219;
     
   }
   else{
    return qunNumber.value =addQunNumber;
   }
  
   
})
document.getElementById('cmbt').addEventListener('click',function(){
   const qunNumber = document.getElementById('cnumAddSub');
   const qunNumberString = qunNumber.value;
   const qunNumberStringToInt =parseInt(qunNumberString);
   const addQunNumber = qunNumberStringToInt - 1;
   if(addQunNumber <1 ){
    alert('You Not Parches less Than 1 Item');
    return  qunNumber.value = 1;
   }
   else{
    return qunNumber.value =addQunNumber;
   }
   
})


