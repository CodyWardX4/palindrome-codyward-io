function displayText(){
	// receive input from user and change to uppercase.
	var userInput = document.getElementById("userInputField").value;
	var userInput = userInput.toUpperCase();

	// needed to display reversed input for user.
	var displayInput = userInput;
	var displaySplit = displayInput.split("");
	var displayReverse = displaySplit.reverse();
	var displayRejoin = displayReverse.join("");

	// valication continued...
	var noExtras = userInput.replace(/[\?!-., ]+/g, '');
	var splitInput = noExtras.split("");
	var reverseInput = splitInput.reverse();
	var rejoinInput = reverseInput.join("");

	function checker(){
		  if (noExtras == rejoinInput){
		  		document.getElementById("userInput").innerHTML = "<span class='input-style'>" + displayInput + "</span>" + " in reverse is " +
		  		"<span class='input-reverse'>" + displayRejoin + "</span>" + " and therefore, it " + "<span class='input-true'>" + "is" + "</span>" +
		  		" a Palindrome.";
		  } else {
		      	document.getElementById("userInput").innerHTML = "<span class='input-style'>" + displayInput + "</span>" + " in reverse is " +
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
