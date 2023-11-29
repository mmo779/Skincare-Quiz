// Retrieve quiz results from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const Acount = urlParams.get("q1");
const Bcount = urlParams.get("q2");
const Ccount = urlParams.get("q3");
const Dcount = urlParams.get("q4");

var finalRes;
var thankYou = "Thank you so much for taking my quiz!";

function userResult(){
	/*
	if (Acount > Bcount && Acount > Ccount && Acount > Dcount){
		finalRes = "Your skin tends to be DRY";
	}else if (Bcount > Acount && Bcount > Ccount && Bcount > Dcount){
		finalRes = "Your skin tends to be NORMAL but can be a little DRY at times";
	}else if (Ccount > Acount && Ccount > Bcount && Ccount > Dcount){
		finalRes = "Your skin tends to be NORMAL but can be a little OILY at times";
	}else if (Dcount > Acount && Dcount > Bcount && Dcount > Ccount){
		finalRes = "Your skin tends to be OILY and is prone to ACNE";
	}else{
		finalRes = error;
	}
	*/
	if(Acount > 2){
		finalRes = "Your skin tends to be DRY";
	}else if (Bcount > 2){
		finalRes = "Your skin tends to be NORMAL but can be a little DRY at times";
	}else if (Ccount > 2){
		finalRes = "Your skin tends to be NORMAL but can be a little OILY at times";
	}else if (Dcount > 2){
		finalRes = "Your skin tends to be OILY and is prone to ACNE";
	}else{
		finalRes = "It seems that you have unique skin! Send an email to example@gmail.com for more custom care!";
	}
	return finalRes + '\n\n' + thankYou;
}

// Simulate a delay to show loading effect
setTimeout(function() {
  // Display the result on the page
  const loadingPage = document.querySelector("h2");
  loadingPage.innerText = "Results!";
  
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.style.display = "block";
  resultContainer.innerText = userResult();
}, 2000);