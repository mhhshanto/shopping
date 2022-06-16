function updateProductNumber(isIncreasing){
  var caseInput= document.getElementById('case-number')
  var caseNumber = caseInput.value
  if(isIncreasing){
    caseInput.value = parseInt(caseNumber) + 1;
  }
  else if(caseNumber > 0){
    caseInput.value = parseInt(caseNumber) - 1;
  }
  var caseTotal = document.getElementById('case-total')
  caseTotal.innerHTML = caseNumber * 59;
}

//case number update
document.getElementById('case-plus').addEventListener('click',function(){
 updateProductNumber(true)
 
})
document.getElementById('case-minus').addEventListener('click',function(){
  updateProductNumber(false)
  
 })
 //phone amount update
 document.getElementById('phone-plus').addEventListener('click',function(){
  updateProductNumber(true)
  
 })