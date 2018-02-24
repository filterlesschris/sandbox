
// Get references to the tbody element, input field and convert button
var $tbody = document.querySelector("tbody");
var $convertBtn = document.querySelector("converter");

// add a listener for user clicking enter key instead of mouse clicking the button
document.getElementById("inputField")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("converter").click();
    }
});

function handleConvertButtonClick(inputField) {
	var convertedInput = inputField.replace(/ /g,"%20");
	// check console to see if the conversion worked. 
	console.log(convertedInput);
	// check for empty user input
	if (inputField == null || inputField == "") {
		alert("Empty Input");
		return true;
	} else {
		//run this is the userfield is not empty, null, or blank..
		console.log(inputField);
		$tbody.innerHTML = "";
		for (var i = 0; i < 1; i++) {
			var $row = $tbody.insertRow(i);
			// add a cell for the user input
			$row.innerText = inputField;
			for (var j = 0; j < 1; j++) {
				// add a cell for the converted input
				var $cell = $row.insertCell(j);
				$cell.innerText = convertedInput;
				
				var btn = document.createElement('input');
				btn.type = "button";
				//btn.className = "btn";
				btn.value = convertedInput;
				btn.onclick = (function(myCopy) {return function() {myCopy(myCopy);}})(myCopy);
				var td = document.createElement("td");
				td.appendChild(btn);
			}
		}
		return false;
	}

}

function myCopy() {
  /* Get the text field */
  var copyText = convertedInput;

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("Copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}