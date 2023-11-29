// Initialize global count variables for each option
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
    }