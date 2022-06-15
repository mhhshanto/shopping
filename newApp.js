// case
function updateProductNumber(rate,product,isIncreasing){
  const caseInput = document.getElementById(product+'-number')
  let caseNumber = caseInput.value;
  if(isIncreasing){
    caseNumber = parseFloat(caseNumber) + 1;

  }
  else if(caseNumber > 0){
    caseNumber = parseFloat(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  const caseTotal = document.getElementById(product+'-total')
  caseTotal.innerHTML = caseNumber * rate;
}
// handle case increase decrease

document.getElementById('case-plus').addEventListener('click',function(){
  updateProductNumber(59,'case',true)
 
})
document.getElementById('case-minus').addEventListener('click',function(){
 updateProductNumber(59,'case',false)
})


//iphone



// function updateIphone(increasing){
//   const iphoneInput = document.getElementById('phone-number');
//   let iphoneNumber = iphoneInput.value
//   if(increasing){
//     iphoneNumber = parseInt(iphoneNumber) +1;
//   }else if(iphoneNumber > 0){
//     iphoneNumber = parseInt(iphoneNumber) -1;
//   }
//   iphoneInput.value = iphoneNumber;
//   const phoneTotal = document.getElementById('price')
//   phoneTotal.innerHTML = iphoneNumber * 1219;
// }


// iphoneee increasee decreaseeeeeeeeeeeeee

document.getElementById('phone-plus').addEventListener('click',function(){
  updateProductNumber(1219,'phone',true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
  updateProductNumber(1219,'phone',false)
 })

