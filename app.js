function pp(){
  
  phoneQuantity = parseFloat(document.getElementById('iphn-q').value);
  document.getElementById('iphn-q').value = phoneQuantity +1
  newQuantity = document.getElementById('iphn-q').value
  phonePrice = document.getElementById('price').innerText;
  phonPrice = parseFloat(phonePrice)
  console.log(phonePrice);
  console.log(phoneQuantity);
  document.getElementById('price').innerHTML = 1219 * newQuantity
}
// case plus button
document.getElementById('case-plus').addEventListener('click', function(){
  caseNumber =parseFloat( document.getElementById('case-number').value);
  document.getElementById('case-number').value = caseNumber + 1;
  caseNum = parseFloat( document.getElementById('case-number').value);
  document.getElementById('case-price').innerHTML = caseNum * 59 ;
  subTotal = parseFloat(document.getElementById('sub-total').innerHTML);
  document.getElementById('sub-total').innerHTML = subTotal + 59
  if(document.getElementById("case-number").value >= 1 ){
    document.getElementById("case-minus").disabled = false;
  }

  // case minus button

})
document.getElementById('case-minus').addEventListener('click', function(){
  caseMinus = parseFloat(document.getElementById("case-number").value);
  
  document.getElementById("case-number").value = caseMinus - 1;
  if(document.getElementById("case-number").value == 0 ){
    document.getElementById("case-minus").disabled = true;
   
  }
  caseTotal = parseFloat(document.getElementById('case-price').innerHTML);
  document.getElementById('case-price').innerHTML = caseTotal - 59;
  subTotal = parseFloat(document.getElementById('sub-total').innerHTML);
  document.getElementById('sub-total').innerHTML = subTotal - 59

})
