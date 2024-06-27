form1.addEventListener("submit", (event) => {
	event.preventDefault();
	let inp = document.getElementById("input1");
	if (inp.value) {
		window.location.href = 'index.html?city=' + inp.value;
	}
});