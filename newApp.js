// case
function updateCaseNumber(isIncreasing){
  const caseInput = document.getElementById('case-number')
  let caseNumber = caseInput.value;
  if(isIncreasing){
    caseNumber = parseFloat(caseNumber) + 1;

  }
  else if(caseNumber > 0){
    caseNumber = parseFloat(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  const caseTotal = document.getElementById('case-price')
  caseTotal.innerHTML = caseNumber * 59;
}


document.getElementById('case-plus').addEventListener('click',function(){
  updateCaseNumber(true)
 
})
document.getElementById('case-minus').addEventListener('click',function(){
 updateCaseNumber()
})
//iphone
function updateIphone(increasing){
  const iphoneInput = document.getElementById('phone-number');
  let iphoneNumber = iphoneInput.value
  if(increasing){
    iphoneNumber = parseInt(iphoneNumber) +1;
  }else if(iphoneNumber > 0){
    iphoneNumber = parseInt(iphoneNumber) -1;
  }
  iphoneInput.value = iphoneNumber;
  const phoneTotal = document.getElementById('price')
  phoneTotal.innerHTML = iphoneNumber * 1219;
}

document.getElementById('phone-minus').addEventListener('click',function(){
 updateIphone()
 
})
document.getElementById('phone-plus').addEventListener('click',function(){
  updateIphone(true)
  
})

