/*// Initialize global count variables for each option
    let optionACount = 0;
    let optionBCount = 0;
    let optionCCount = 0;
    let optionDCount = 0;

    function submitQuiz() {
      // Get all radio buttons in the form
      const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

      // Loop through each selected radio button
      radioButtons.forEach(radioButton => {
        // Get the value of the selected option
        const value = radioButton.value;

        // Increment the count for the selected option
        switch (value) {
          case 'A':
            optionACount++;
            break;
          case 'B':
            optionBCount++;
            break;
          case 'C':
            optionCCount++;
            break;
          case 'D':
            optionDCount++;
            break;
        }
      });
	  
	  // Construct URL with answers
	  const resultsPageUrl = `results.html?q1=${optionACount}&q2=${optionBCount}&q3=${optionCCount}&q4=${optionDCount}`;
	  
	  // Redirect to the results page
	  window.location.replace(resultsPageUrl);
    }*/
	// Initialize global count variables for each option
let optionACount = 0;
let optionBCount = 0;
let optionCCount = 0;
let optionDCount = 0;

function submitQuiz(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get all radio buttons in the form
  const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

  // Check if at least one option is selected for each question
  if (
    isRadioButtonSelected('q1') &&
    isRadioButtonSelected('q2') &&
    isRadioButtonSelected('q3') &&
    isRadioButtonSelected('q4')
  ) {
    // Loop through each selected radio button
    radioButtons.forEach(radioButton => {
      // Get the value of the selected option
      const value = radioButton.value;

      // Increment the count for the selected option
      switch (value) {
        case 'A':
          optionACount++;
          break;
        case 'B':
          optionBCount++;
          break;
        case 'C':
          optionCCount++;
          break;
        case 'D':
          optionDCount++;
          break;
      }
    });

    // Construct URL with answers
    const resultsPageUrl = `results.html?q1=${optionACount}&q2=${optionBCount}&q3=${optionCCount}&q4=${optionDCount}`;

    // Redirect to the results page
    window.location.replace(resultsPageUrl);
  } else {
    // Display an alert or perform other actions for invalid form
    alert('Please answer all questions before submitting.');
  }
}

// Function to check if at least one radio button is selected for a given question
function isRadioButtonSelected(question) {
  const radioButtons = document.querySelectorAll(`input[name="${question}"]:checked`);
  return radioButtons.length > 0;
}
