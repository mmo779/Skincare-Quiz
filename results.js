// Retrieve quiz results from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const Acount = urlParams.get("q1");
const Bcount = urlParams.get("q2");
const Ccount = urlParams.get("q3");
const Dcount = urlParams.get("q4");

const name = urlParams.get("name");

var finalRes;
var thankYou = "Thank you so much for taking my quiz!";

function userResult(){
	if(Acount > 2){
		finalRes = "Your skin tends to be DRY";
	}else if (Bcount > 2){
		finalRes = "Your skin tends to be NORMAL but can be a little DRY at times";
	}else if (Ccount > 2){
		finalRes = "Your skin tends to be NORMAL but can be a little OILY at times";
	}else if (Dcount > 2){
		finalRes = "Your skin tends to be OILY and is prone to ACNE";
	}else{
		finalRes = "It seems that you have unique skin! Send an email to shanonlb@gmail.com for more custom care!";
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
  
  // Calculate the quiz results
  const resultText = finalRes;
  
  // Set finalRes as the default value of the hidden input element
  const hiddenInputElement = document.getElementById("entry.505097829");
  hiddenInputElement.value = resultText;
  
  //Set the name
  const hiddenInputElement = document.getElementById("entry.335922090");
  hiddenInputElement.value = name;
  
  // Submit the form programmatically
  document.getElementById("gform").submit();
	
}, 2000);