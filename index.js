function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Perform validation for each input field
    const firstName = document.getElementById("entry.206538248").value.trim();
    const lastName = document.getElementById("entry.1038247496").value.trim();
    const email = document.getElementById("entry.1314714482").value.trim();
    const age = document.getElementById("entry.1016704801").value.trim();
    const issues = document.getElementById("entry.1794233666").value.trim();

    // Check if any field is empty or doesn't meet the pattern
    if (firstName === "" || age === "" || email === "" || lastName === "" || issues === ""){
		alert("Please fill out all fields");
		return;
	}else if (!/^[A-Za-z]+$/.test(firstName)){
		alert("Please use letters only (First Name field).");
		return;
	}else if(!/^[A-Za-z]+$/.test(lastName)){
		alert("Please use letters only (Last Name field).");
		return;
	}else if(!/^[A-Za-z\s]+$/.test(issues)){
		alert("Please use letters only (Target Issues field).");
		return;
	}else if (isNaN(age)){
		alert("Please use numbers only.");
		return;
	}else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email)){
		alert("Please use correct email format.");
		return;
	}

    // If all validations pass, execute the desired action
    hideGenShowTest();
}
//***********************************************************************************
function hideGenShowTest() {
	/*
	// Perform form validation checks
	const firstName = document.getElementById("entry.206538248").value;
	const lastName = document.getElementById("entry.1038247496").value;
	const email = document.getElementById("entry.1314714482").value;
	const age = document.getElementById("entry.1016704801").value;
	const issues = document.getElementById("entry.1794233666").value;
	
	if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || age.trim() === "" || issues.trim() === "") {
		alert("Please fill in all required fields.");
		return; // Exit the function if any field is empty
	}*/
	//event.preventDefault(); // Prevent the default form submission
	var T = document.getElementById("genInfo");
	T.style.display = "none";  // <-- Set it to block
	var T2 = document.getElementById("quiz");
	T2.style.display = "block";  // <-- Set it to block
}
//***********************************************************************************

//***********************************************************************************
let isHidden = false;
function hideTestShowRes() {
	if (isHidden){
		var T = document.getElementById("quiz");
		T.style.display = "none";  // <-- Set it to block
		var T2 = document.getElementById("resultsPage");
		T2.style.display = "block";  // <-- Set it to block
	}else{return;}
}
//***********************************************************************************

//***********************************************************************************	
// Initialize global count variables for each option
let optionACount = 0;
let optionBCount = 0;
let optionCCount = 0;
let optionDCount = 0;
let finalRes;
let finalCount = 0;

function getRes(event) {
	//event.preventDefault(); // Prevent the default form submission
	
	// Get all radio buttons in the form
	const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
	
	// Check if at least one option is selected for each question
	if (
		isRadioButtonSelected('q1') &&
		isRadioButtonSelected('q2') &&
		isRadioButtonSelected('q3') &&
		isRadioButtonSelected('q4')&&
		isRadioButtonSelected('q5')
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
		isHidden = true;
		});
	} else {
		// Display an alert or perform other actions for invalid form
		alert('Please answer all questions before submitting.');
		return;
	}
	
	//*results stuff*
	let score = "You scored a ";
	let imageShown;

	let eyeCreme = "EyeCrème";
	let dry1 = "Dry 3 in 1 Cleanser";
	let dry2 = "Dry DayTime Moisturizer";
	let dry3 = "Dry Evening Moisturizer";
	let normToDry1 = "Normal to Dry 3 in 1 Cleanser";
	let normToDry2 = "Normal to Dry DayTime Moisturizer";
	let normToDry3 = "Normal to Dry Evening Moisturizer";
	let normToOil1 = "Normal to Oily 3 in 1 Cleanser";
	let normToOil2 = "Normal to Oily DayTime Moisturizer";
	let normToOil3 = "Normal to Oily Evening Moisturizer";
	let oil1 = "Oily to Acne 3 in 1 Cleanser";
	let oil2 = "Oily to Acne DayTime Moisturizer";
	let oil3 = "Oily to Acne Evening Moisturizer";
   
	
	var afterText = document.getElementById('after-text');
	
	var link1;
	var link2;
	var link3;
	var link4 ='https://web.senegence.com/en_us/3055d-eyecreme.html';
   var kitLink;
	
   var regimenSet;
	var ank1 = document.createElement('a'); ank1.className = "anks";ank1.target = "_blank";
	var ank2 = document.createElement('a'); ank2.className = "anks";ank2.target = "_blank";
	var ank3 = document.createElement('a'); ank3.className = "anks";ank3.target = "_blank";
	var ank4 = document.createElement('a'); ank4.className = "anks";ank4.target = "_blank";ank4.href=link4;ank4.textContent = eyeCreme;
   var kitAnk = document.createElement('a'); kitAnk.className = "anks";kitAnk.target = "_blank";
	//**********
	
	finalCount = optionACount + (optionBCount * 2) + (optionCCount * 3) + (optionDCount * 4);
	
	if(finalCount == 5){
		link1 ='https://web.senegence.com/en_us/3045c-3-in-1-cleanser-dry.html?distributor_id=737819';
		link2 ='https://web.senegence.com/en_us/3005c-daytime-moisturizer-dry.html?distributor_id=737819';
		link3 ='https://web.senegence.com/en_us/3025c-evening-moisturizer-dry.html?distributor_id=737819';
      kitLink = 'https://web.senegence.com/en_us/set9052-dry-skincare-regimen-set.html?distributor_id=737819';
      
      ank1.href = link1;
      ank2.href = link2;
      ank3.href = link3;
      kitAnk.href = kitLink;
      regimenSet = "Dry SkinCare Regimen Set";
		ank1.textContent = dry1;
		ank2.textContent = dry2;
		ank3.textContent = dry3;
      kitAnk.textContent = regimenSet;
		
		// Rest of your code
      
		finalRes = "Your skin tends to be DRY";
		afterText.innerHTML = "You need a skin care system that pours moisture back into your skin and helps control its" +
			" humidity without being greasy, supports skin renewal, and gently exfoliates away dead skin.<br><br>" +
			
			"We recommend the " + kitAnk.outerHTML.bold() + ".<br><br>" +
			"Go ageless with this 4-step regimen designed to refine texture, even skin tone, and diminish the appearance" +
			" of fine lines and wrinkles for a revitalized and refreshed complexion. Powered by innovative, proprietary" +
			" complex SenePlex+® with plant-derived Orchid Stem Cells and potent skin actives.<br><br>" +
			
			"Regimen products include:<br><br>" +
			
			"- " + ank1.outerHTML.bold() + ". Gentle Foaming sulfate-free, triple-action cleanser works to cleanse, tone, and" +
			" exfoliate while helping to maintain skin’s moisture. The formula works to effectively remove dirt and oil" +
			" without stripping natural oils.<br><br>" +
			
			"- " + ank2.outerHTML.bold() + ". Protect with this AM moisturizer that works to replenish and restore" +
			" moisture. Formulated with innovative anti-aging skin actives, it helps to refine texture, even skin tone," +
			" and diminish the appearance of fine lines and wrinkles for an overall more youthful appearance.<br><br>" +
			
			"- " + ank3.outerHTML.bold() + ". Nourish with this rich nighttime moisturizer that is formulated to help" +
			" enhance the skin’s natural recovery process while you sleep. It helps to provide optimal moisture, refine" +
			" texture, even skin tone, and diminish the appearance of fine lines and wrinkles.<br><br>" +
			
			"- " + ank4.outerHTML.bold() + ". Treat your delicate eye area with this clinically tested nourishing and rich balm to" +
			" successfully reduce the appearance of fine lines and wrinkles while calming irritation, redness, and" +
			" puffiness. Deeply hydrates the uniquely delicate skin around the eyes. The result is an eye area that’s" +
			" brighter, firmer, and more luminous.\n\n";
		
		imageShown = "dry_skincare-6.jpg";
	}else if (finalCount >= 6 && finalCount <= 10){
		link1 ='https://web.senegence.com/en_us/3040d-3-in-1-cleanser-normal-to-dry.html?distributor_id=737819';
		link2 ='https://web.senegence.com/en_us/3000e-daytime-moisturizer-normal-to-dry.html?distributor_id=737819';
		link3 ='https://web.senegence.com/en_us/3020c-evening-moisturizer-normal-to-dry.html?distributor_id=737819';
      kitLink = 'https://web.senegence.com/en_us/set9051-normal-dry-skincare-regimen-set.html?distributor_id=737819';
      
      ank1.href = link1;
      ank2.href = link2;
      ank3.href = link3;
      kitAnk.href = kitLink;
      regimenSet = "Normal to Dry SkinCare Regimen Set";
		ank1.textContent = normToDry1;
		ank2.textContent = normToDry2;
		ank3.textContent = normToDry3;
      kitAnk.textContent = regimenSet;
		
		
		finalRes = "Your skin tends to be NORMAL but can be a little DRY at times";
		afterText.innerHTML = "You need a skin system that maintains your healthy skin renewal, but also packs in the" + 
        "moisture for the areas on your face that tend to be more dry.\n\n" +
        
        "We recommend the " + kitAnk.outerHTML.bold() + ".\n\n" +
        "This targeted 4-step, clinically proven, and dermatologist-tested skin care regimen cleanses, diminishes fine" +
        "lines and wrinkles, while adding an extra boost of hydration. Powered by innovative, proprietary complex" +
        "SenePlex+® with plant-derived Orchid Stem Cells and potent skin actives.\n\n" +
        
        "Regimen products include:\n\n" +
        
        "- " + ank1.outerHTML.bold() + ". Luxurious, creamy sulfate-free cleanser that cleanses, tones, and" +
        "exfoliates while hydrating your skin. It thoroughly yet gently washes away impurities and makeup to" +
        "leave skin soft and smooth.\n\n" +
        
        "- " + ank2.outerHTML.bold() + ". Instantly boosts hydration for a plump, dewy glow. This multiaction" +
        "moisturizer brightens skin tone, restores bounce and refines texture. Lines and wrinkles look" +
        "reduced. Pores appear minimized.\n\n" +
        
        "- " + ank3.outerHTML.bold() + ". Visibly firm and help to re-define facial contours with this rich," +
        "ultra-nourishing light-weight night cream. It refines skin texture, evens skin tone, and reduces the look" +
        "of fine lines while you sleep. Wake up looking radiant, morning after morning.\n\n" +
        
        "- " + ank4.outerHTML.bold() + ". Treat your delicate eye area with this clinically tested nourishing and rich balm to" +
        "successfully reduce the appearance of fine lines and wrinkles while calming irritation, redness, and" +
        "puffiness. Deeply hydrates the uniquely delicate skin around the eyes. The result is an eye area that’s" +
        "brighter, firmer, and more luminous.\n\n";
		
		imageShown = "dry_skincare-27.jpg";
	}else if (finalCount >= 11 && finalCount <= 15){
		link1 ='https://web.senegence.com/en_us/3050d-3-in-1-cleanser-normal-to-oily.html?distributor_id=737819';
		link2 ='https://web.senegence.com/en_us/3010c-daytime-moisturizer-normal-to-oily.html?distributor_id=737819';
		link3 ='https://web.senegence.com/en_us/3030c-evening-moisturizer-normal-to-oily.html?distributor_id=737819';
      kitLink = 'https://web.senegence.com/en_us/set9053-normal-oily-skincare-regimen-set.html?distributor_id=737819';
      
      ank1.href = link1;
      ank2.href = link2;
      ank3.href = link3;
      kitAnk.href = kitLink;
      regimenSet = "Normal to Oily SkinCare Regimen Set";
		ank1.textContent = normToOil1;
		ank2.textContent = normToOil2;
		ank3.textContent = normToOil3;
      kitAnk.textContent = regimenSet;
		
		
		finalRes = "Your skin tends to be NORMAL but can be a little OILY at times";
		afterText.innerHTML = "You need a skin system that supports healthy skin renewal, exfoliates dead skin, and" + 
        "removes excess oil.\n\n" +
        
        "We recommend the " + kitAnk.outerHTML.bold() + ".\n\n" +
        "This 4-step regimen is powered by innovative, proprietary complex SenePlex+® with plant-derived Orchid" +
        "Stem Cells and potent skin actives. This dermatologist-tested routine is specially formulated for" +
        "normal-to-oily skin types.\n\n" +
        
        "Regimen products include:\n\n" +
        
        "- " + ank1.outerHTML.bold() + ". Purifying gel, sulfate-free cleanser gently cleanses, tones, and" +
        "exfoliates while removing excess oil, dirt and other impurities. Leaves your skin balanced and refreshed," +
        "with a radiant glow.\n\n" +
        
        "- " + ank2.outerHTML.bold() + ". This light-weight moisturizer infuses skin with balancing" +
        "hydration and refines texture, leaving a luminous glow. Mattifies shiny T-Zone and helps to minimize" +
        "advanced signs of aging for a renewed vibrancy.\n\n" +
        
        "- " + ank3.outerHTML.bold() + ". Supremely hydrating, this night cream supports firmer-looking" +
        "complexion while refinishing the skin’s surface to help reduce the appearance of enlarged pores." +
        "Defends against signs of aging to minimize the look of fine lines and wrinkles. Wake up to a refreshed" +
        "and radiant complexion.\n\n" +
		
        "- " + ank4.outerHTML.bold() + ". Treat your delicate eye area with this clinically tested nourishing and rich balm to" +
        "successfully reduce the appearance of fine lines and wrinkles while calming irritation, redness, and" +
        "puffiness. Deeply hydrates the uniquely delicate skin around the eyes. The result is an eye area that’s" +
        "brighter, firmer, and more luminous.\n\n";
		
		imageShown = "normaltodry_lifestyle_set-1.jpg";
	}else if (finalCount >= 16 && finalCount <= 20){
		link1 ='https://web.senegence.com/en_us/3053a-3-in-1-cleanser-oily-to-acne.html?distributor_id=737819';
		link2 ='https://web.senegence.com/en_us/3015b-daytime-moisturizer-oily-to-acne.html?distributor_id=737819';
		link3 ='https://web.senegence.com/en_us/3033b-evening-moisturizer-oily-to-acne.html?distributor_id=737819';
      kitLink = 'https://web.senegence.com/en_us/set9054-oily-acne-skincare-regimen-set.html?distributor_id=737819';
      
      ank1.href = link1;
      ank2.href = link2;
      ank3.href = link3;
      kitAnk.href = kitLink;
      regimenSet = "Oily to Acne SkinCare Regimen Set";
		ank1.textContent = oil1;
		ank2.textContent = oil2;
		ank3.textContent = oil3;
      kitAnk.textContent = regimenSet;
		
		
		finalRes = "Your skin tends to be OILY and is prone to ACNE";
		afterText.innerHTML = "You need a skin system that fights bacteria that lead to breakouts and controls oil" + 
        "production but is also soothing to inflamed skin.\n\n" +
        
        "We recommend the " + kitAnk.outerHTML.bold() + ".\n\n" +
        "This skincare regimen is powered by innovative, proprietary complex SenePlex+® with plant-derived Orchid" +
        "Stem Cells, as well Salicylic Acid and other potent skin actives. This dermatologist-tested routine is specially" +
        "formulated for oily-to-acne skin types.\n\n" +
        
        "Regimen products include:\n\n" +
        
        "- " + ank1.outerHTML.bold() + ". Gentle and mild foaming sulfate-free cleanser works to cleanse, tone, and" +
        "exfoliate in one easy step for those who experience oily skin, blemishes, and breakouts on the entire" +
        "face. Infused with BHA Salicylic Acid that helps target acne and congested skin while working to" +
		"prevent new acne from forming. Formulated to help to subdue surface bacteria while helping to control"+
		"sebum production.\n\n" +
        
        "- " + ank2.outerHTML.bold() + ". Daily lightweight moisturizer provides environmental protection in" +
        "a unique formula that meets the precise needs of your skin type. Salicylic Acid helps to clear skin and" +
        "prevent new acne from forming. Ginger Extracts help to soothe and calm irritation. Infused with active" +
		"compounds to balance sebum production and helps reduce excessive oil production. Also, offers" +
		"advanced anti-aging benefits while moisturizing the skin.\n\n" +
        
        "- " + ank3.outerHTML.bold() + ". This evening moisturizer helps hydrate and rejuvenate overnight" +
        "while helping improve the skin by calming and conditioning . Salicylic Acid that helps to clear skin and" +
        "prevent new acne from forming. Shea Butter provides essential lipids and oils to nourish irritated skin." +
        "Infused with active compounds to balance sebum production and helps reduce excessive oil" +
		"production. Also, offers advanced anti-aging benefits while moisturizing the skin.\n\n" +
		
        "- " + ank4.outerHTML.bold() + ". Treat your delicate eye area with this clinically tested nourishing and rich balm to" +
        "successfully reduce the appearance of fine lines and wrinkles while calming irritation, redness, and" +
        "puffiness. Deeply hydrates the uniquely delicate skin around the eyes. The result is an eye area that’s" +
        "brighter, firmer, and more luminous.\n\n";
		
		imageShown = "senegence-skincare-collection.jpg";
	}
	document.body.appendChild(afterText);
	
	var resultField = document.getElementById('entry.1974292429');
	resultField.value = finalRes;
	
	var resultImg = document.getElementById('skincare-pics');
	resultImg.src = imageShown;
	
	if (imageShown == "senegence-skincare-collection.jpg"){
		resultImg.style.height="300px";
	}else if (imageShown == "dry_skincare-6.jpg"){
		resultImg.style.height="400px";
	}
	
	const resultContainer = document.getElementById("resultContainer");
	resultContainer.innerText = score + finalCount + '\n' + finalRes;
	
	hideTestShowRes();
	document.getElementById("gform").submit();
}
//***********************************************************************************

//***********************************************************************************	
// Function to check if at least one radio button is selected for a given question
function isRadioButtonSelected(question) {
	const radioButtons = document.querySelectorAll(`input[name="${question}"]:checked`);
	return radioButtons.length > 0;
}
//***********************************************************************************

/*
    function checkSubmission() {                                                     
      if (submitted) {                                                               
        // Redirect to the next page                                                                              
      }                                                                              
    }

	var submitted = false;

     $(document).ready(function() {
      $('#gform').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        submitted = true; // Set submitted to true before submitting
        this.submit();
      });
	});
	*/



	/*
	let finalRes;
	let finalCount = 0;
	function userResult(event){
		finalCount = optionACount + (optionBCount * 2) + (optionCCount * 3) + (optionDCount * 4);
		
		if(finalCount == 5){
			finalRes = "Your skin tends to be DRY";
		}else if (finalCount >= 6 && finalCount <= 10){
			finalRes = "Your skin tends to be NORMAL but can be a little DRY at times";
		}else if (finalCount >= 11 && finalCount <= 15){
			finalRes = "Your skin tends to be NORMAL but can be a little OILY at times";
		}else if (finalCount >= 16 && finalCount <= 20){
			finalRes = "Your skin tends to be OILY and is prone to ACNE";
		}
		
		const loadingPage = document.querySelector("h2");
		loadingPage.innerText = "Results!";
		
		const resultContainer = document.getElementById("resultContainer");
		resultContainer.innerText = userResult();
	}
	
	// Simulate a delay to show loading effect
	setTimeout(function() {
		// Display the result on the page
		const loadingPage = document.querySelector("h2");
		loadingPage.innerText = "Results!";
		
		const resultContainer = document.getElementById("resultContainer");
		resultContainer.innerText = userResult();
			
	}, 2000);*/

	/*
	//Get the users name for the final results
	let name;
	let ext;
	const quizPageUrl = 'quiz.html';
	
    var submitted = false;

     $(document).ready(function() {
      $('#gform').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        submitted = true; // Set submitted to true before submitting
		name = document.getElementById('entry.1425330748').value;
		ext = '?name=' + encodeURIComponent(name);
        this.submit();
      });
    });
	*/