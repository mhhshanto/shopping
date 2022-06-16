function updateProductNumber(isIncreasing,product,rate){
  var caseInput= document.getElementById(product+'-number')
  var caseNumber = caseInput.value
  if(isIncreasing){
    caseNumber = parseInt(caseNumber) + 1;
  }
  else if(caseNumber > 0){
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber
  var caseTotal = document.getElementById(product+'-total')
  caseTotal.innerHTML = caseNumber * rate;
  calcutateTotal()
  
}
// sub-total count
function getInputValue(product){
  const productInput =document.getElementById(product+'-number')
  const productNumber = parseInt(productInput.value)
  return productNumber;
}

function calcutateTotal(){
 
  const phoneTotal= getInputValue("phone") * 1219
  const caseTotal = getInputValue('case') *59
  document.getElementById('sub-total').innerHTML = phoneTotal + caseTotal
}

//case number update
document.getElementById('case-plus').addEventListener('click',function(){
 updateProductNumber(true,'case',59)
 
})
document.getElementById('case-minus').addEventListener('click',function(){
  updateProductNumber(false,'case',59)
  
 })
 //phone amount update
 document.getElementById('phone-plus').addEventListener('click',function(){
  updateProductNumber(true,'phone',1219)
  
 })
 document.getElementById('phone-minus').addEventListener('click',function(){
  updateProductNumber(false,'phone',1219)
  
 })

//  eend