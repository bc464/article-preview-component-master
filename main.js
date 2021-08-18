function show() {
	let tooltiptext = document.getElementById("tooltiptext");
	if (tooltiptext.classList.toggle("show")) {
		document.querySelector(".share-icon").style.backgroundColor = "hsl(212, 23%, 69%)";
		document.querySelector(".share-icon").style.color = "#fff";
	} else {
		document.querySelector(".share-icon").style.backgroundColor = "hsl(210, 46%, 95%)";
		document.querySelector(".share-icon").style.color = "#000";
	}
}
document.querySelector(".share-icon").addEventListener("click", show);