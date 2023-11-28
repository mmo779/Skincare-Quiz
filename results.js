// Retrieve quiz results from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const result1 = urlParams.get("q1");
const result2 = urlParams.get("q2");
const result3 = urlParams.get("q3");
const result4 = urlParams.get("q4");

	console.log('Option A count:', result1);
    console.log('Option B count:', result2);
    console.log('Option C count:', result3);
    console.log('Option D count:', result4);

/*
var finalRes;

function userResult(){
	if (result1 > result2 && result1 > result3 && result1 > result4){
		finalRes = result1;
	}else if (result2 > result1 && result2 > result3 && result2 > result4){
		finalRes = result2;
	}else if (result3 > result1 && result3 > result2 && result3 > result4){
		finalRes = result3;
	}else if (result4 > result1 && result4 > result2 && result4 > result3){
		finalRes = result4;
	}else{
		finalRes = 
	}
}*/
