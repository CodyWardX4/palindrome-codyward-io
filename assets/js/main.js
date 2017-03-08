function displayText(){
	var userInput = document.getElementById("userInputField").value;
	var userInput = userInput.toUpperCase();

	var displayInput = userInput;

	var noSpacesNoCommas = userInput.replace(/[\s,.-[\]!?]+/g, '');
	var splitInput = noSpacesNoCommas.split("");
	var reverseInput = splitInput.reverse();
	var rejoinInput = reverseInput.join("");

	var displaySplit = displayInput.split("");
	var displayReverse = displaySplit.reverse();
	var displayRejoin = displayReverse.join("");

	function checker(){
		  if (noSpacesNoCommas == rejoinInput){
		  		document.getElementById("userInput").innerHTML = "<span class='input-style'>" + userInput + "</span>" + " in reverse is " +
		  		"<span class='input-reverse'>" + displayRejoin + "</span>" + " and therefore, it " + "<span class='input-true'>" + "is" + "</span>" +
		  		" a Palindrome.";
		  } else {
		      	document.getElementById("userInput").innerHTML = "<span class='input-style'>" + userInput + "</span>" + " in reverse is " +
		  		"<span class='input-reverse'>" + displayRejoin + "</span>" + " and therefore, it " + "<span class='input-false'>" + "is&nbsp;NOT" + "</span>" +
		  		" a Palindrome.";
		  }
	}
	checker();
}

// function for hitting enter instead of clicking submit button.
$("#userInputField").keyup(function(event){
    if(event.keyCode == 13){
        $("#submitButton").click();
    }
});
