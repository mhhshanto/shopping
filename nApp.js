function updateNumber(isIncreasing,product,rate){
  var caseInput = document.getElementById(product+'-number')
  var caseNumber = caseInput.value;
 if(isIncreasing){
  caseNumber = parseFloat(caseNumber) + 1;
 }
 else if(caseNumber > 0){
  caseNumber = parseFloat(caseNumber) - 1;
 }
 caseInput.value = caseNumber
 var caseTotal = document.getElementById(product+'-total')
 caseTotal.innerHTML = caseNumber * rate;
}
// case
document.getElementById('case-plus').addEventListener('click',function(){
  updateNumber(true,'case',59)
})

document.getElementById('case-minus').addEventListener('click',function(){
  updateNumber(false,'case',59)
})
// phone
document.getElementById('phone-plus').addEventListener('click',function(){
  updateNumber(true,'phone',1219)
})
document.getElementById('phone-minus').addEventListener('click',function(){
  updateNumber(false,'phone',1219)
})