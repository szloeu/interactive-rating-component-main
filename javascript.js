function changeVisibility() {
  document.getElementById("rating").style.visibility = "hidden";
  document.getElementById("thankyou").style.visibility = "visible";	
}

function whichNumber(num) {
  const number = num;
  document.getElementById("span-selected").innerHTML = number;
}