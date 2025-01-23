// b3a00881717c4805bec145810240606
let urlParams = new URLSearchParams(window.location.search);
let input = document.getElementById("input")
let form = document.getElementById("form")
let arr = [];
let place;
let firstly = true;
let bgColor = true;
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


// $(".light").on("click", () => {
// 	bgColor = true;
// 	if (bgColor == true) {
// 		console.log("true");
// 		$(".light").css({"box-shadow": "0px 0px 15px 0px #deaf71", "background": "#9b7b51"});
// 		$(".dark").css({"box-shadow": "none","background": "none"});
// 		$("body").css({"background": "#B5C18E"});
// 		$(".color").css({"color": "#F1F1F1"});
// 		$(".btnColor").css({"background": "#C7B7A3"});
// 		$(".dayBlock").css({"border-bottom": "1px solid #C7B7A3"});
// 		$(".dayBlock:last-child").css({"border-bottom": "0px"});
// 		$(".color2").css({"color": "#D1D1D1"});
// 		$(".bg").css({"background": "#EADBC8"});
// 	}
// })

// $(".dark").on("click", () => {
// 	bgColor = false;
// 	if (bgColor == false) {
// 		console.log("false");
// 		$(".dark").css({"box-shadow": "0px 0px 15px 0px #4c8ac3","background": "#284662"});
// 		$(".light").css({"box-shadow": "none", "background": "none"});
// 		$("body").css({"background": "#222831"});
// 		$(".bg").css({"background": "#393E46"});
// 		$(".color").css({"color": "#EEEEEE"})
// 		$(".color2").css({"color": "#818181"})
// 		$(".color3").css({"color": "#FFFFFF"})
// 		$(".btnColor").css({"background": "#557779"})
// 		$(".dayBlock").css({"border-bottom": "1px solid gray"})
// 		$(".dayBlock:last-child").css({"border-bottom": "0px"})
// 	}
// })



// let makeItRain = function () {
// 	clear out everything
// 	$('.rain').empty();

// 	let increment = 0;
// 	let drops = "";
// 	let backDrops = "";

// 	while (increment < 90) {
// 		//couple random numbers to use for various randomizations
// 		//random number between 98 and 1
// 		let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
// 		//random number between 5 and 2
// 		let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
// 		//increment
// 		increment += randoFiver;
// 		//add in a new raindrop with various randomizations to certain CSS properties
// 		drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
// 		backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
// 	}

// 	$('.rain.front-row').append(drops);
// 	$('.rain.back-row').append(backDrops);
// }
// makeItRain()

// Function which show info about today ===========
function timeWholeDay(id) {
	let todayFore = document.getElementById("container-today-blocks");
	let currentDay = place.forecast.forecastday[id];
	todayFore.innerHTML = ""
	for (let i = 6; i < 22; i += 3) {
		todayFore.innerHTML += `
			<div class="block">
				<h4 class="time-weather">${currentDay.hour[i].time.split(" ")[1]}</h4>
				<img class="img-weather" src="${currentDay.hour[i].condition.icon}" alt="">
				<p class="text-weather color">${currentDay.hour[i].temp_c.toString().split(".")[0]}°</p>
			</div>
		`;
	}
}

// Function which generate buttons for a week ===========
function generateHtml() {
	let tempWeek = document.getElementById("container-temp-week");
	for (let i = 0; i < 3; i++) {
		tempWeek.innerHTML += `
			<button class="dayBlock" id="${i}" type="button" onclick="proceedDay(${place, i})">
				<div class="dayBlockDate" style="color: #F1F1F1;"><h4 class="fore-name-day color">${days[i]}</h4>${place.forecast.forecastday[i].date}</div>
				<img class="fore-img-day" src="${place.forecast.forecastday[i].day.condition.icon}" alt="">
				<h4 class="fore-text-day color">${place.forecast.forecastday[i].day.condition.text}</h4>
				<p class="fore-temp-day"><span class="main-temp color" >${arr[i].toString().split(".")[0]}°</span></p>
			</button>
		`;
	}
}

// Function which create info about next 3 days ===========
function proceedDay(id) {
	let tempToday = document.getElementById("temp-today");
	tempToday.innerHTML = `
		<div class="info-temp-today">
			<h2 class="temp-country">${place.location.name}</h1>
			<p class="country">${place.location.country}</p>
			<p class="day-of-week color2">${place.forecast.forecastday[id].date}</p>
			<h1 class="temp-in-country">${place.forecast.forecastday[id].day.maxtemp_c.toString().split(".")[0]}°</h1>
		</div>
		<div class="block-img-temp-today">  
			<img class="img-temp" src="${place.forecast.forecastday[id].day.condition.icon}" alt="">
		</div>
		<div class="second-section bg">
			<div class="temp-one-week-block">
				<h1 class="temp-one-week-text color">3-DAY FORECAST</h1>
				<form id="container-temp-week" class="container-temp-week">
				</form>
			</div>
		</div>  
	`;

	timeWholeDay(id);

	let airConds = document.getElementById("air-cond-blocks");
	airConds.innerHTML = `
		<div class="air-cond-block">
			<div class="block-img-text">
				<img src="icons/high-temperature.png" height="25px">
				<p class="air-cond-block-text color2">Real Feel</p>
			</div>
			<p class="air-cond-p-info color">${place.forecast.forecastday[id].day.avgtemp_c.toString().split(".")[0]}°</p>
		</div>

		<div class="air-cond-block">
			<div class="block-img-text">
				<img src="icons/wind.png" height="25px">
				<p class="air-cond-block-text color2">Wind</p>
			</div>
			<div class="air-cond-p-info color">${place.forecast.forecastday[id].day.maxwind_kph}kp/h</div>
		</div>

		<div class="air-cond-block">
			<div class="block-img-text">
				<img src="icons/temperature.png" height="25px">
				<p class="air-cond-block-text color2">Change of rain</p>
			</div>
			<div class="air-cond-p-info color">${(place.forecast.forecastday[id].day.totalprecip_mm * 100).toString().split(".")[0]}%</div>
		</div>

		<div class="air-cond-block">
			<div class="block-img-text">
				<img src="icons/sun.png" height="25px">
				<p class="air-cond-block-text color2">UV-index</p>
			</div>
			<div class="air-cond-p-info color">${place.forecast.forecastday[id].day.uv}</div>
		</div> 
	`;

	generateHtml();
}

// Function which load city ===========
function loadCity(city) {
	let url = `https://api.weatherapi.com/v1/forecast.json?key=b3a00881717c4805bec145810240606&q=${city}&days=7&aqi=no&alerts=no`;
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "b3a00881717c4805bec145810240606");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.responseType = "json";
	xhr.send();
	xhr.onload = () => {
		place = xhr.response;

		// Finding middle num of temperature ==================================
		arr = [];
		for (let i = 0; i < 3; i++) {
			arr[i] = Math.floor(place.forecast.forecastday[i].day.maxtemp_c + place.forecast.forecastday[i].day.mintemp_c) / 2;
		}

		// Shifting names of week =============================================
		let day = place.forecast.forecastday[0].date;
		let dayD = new Date(day);
		let getDay = dayD.getDay() - 1;

		if (firstly) {
			firstly = false;
			for (let i = 0; i <= getDay - 1; i++) {
				for (let j = 0; j <= 5; j++) {
					let dayDate = days[j];
					days[j] = days[j + 1];
					days[j + 1] = dayDate;
				}
			}
		}

		let tempToday = document.getElementById("temp-today");
		tempToday.innerHTML = `
	        <div class="info-temp-today">
	            <h2 class="temp-country">${place.location.name}</h1>
	            <p class="country">${place.location.country}</p>
	            <p class="day-of-week color">${place.current.last_updated}</p>
	            <h1 class="temp-in-country">${place.current.temp_c.toString().split(".")[0]}°</h1>
	        </div>
	        <div class="block-img-temp-today">  
				<img class="img-temp" src="${place.current.condition.icon}" alt="">
			</div>
			<div class="second-section bg">
				<div class="temp-one-week-block">
					<h1 class="temp-one-week-text color">7-DAY FORECAST</h1>
					<form id="container-temp-week" class="container-temp-week">
					</form>
				</div>
			</div>
	    `;

		timeWholeDay(0);

		let airConds = document.getElementById("air-cond-blocks");
		airConds.innerHTML = `
	        <div class="air-cond-block">
				<div class="block-img-text">
					<img src="icons/high-temperature.png" height="25px">
					<p class="air-cond-block-text color2">Real Feel</p>
				</div>
				<p class="air-cond-p-info color">${place.current.feelslike_c.toString().split(".")[0]}°</p>
			</div>

			<div class="air-cond-block">
				<div class="block-img-text">
					<img src="icons/wind.png" height="25px">
					<p class="air-cond-block-text color2">Wind</p>
				</div>
				<div class="air-cond-p-info color">${place.current.wind_kph}kp/h</div>
			</div>

			<div class="air-cond-block">
				<div class="block-img-text">
					<img src="icons/temperature.png" height="25px">
					<p class="air-cond-block-text color2">Change of rain</p>
				</div>
				<div class="air-cond-p-info color">${place.current.precip_mm.toString().split(".")[0]}</div>
			</div>

			<div class="air-cond-block">
				<div class="block-img-text">
					<img src="icons/sun.png" height="25px">
					<p class="air-cond-block-text color2">UV-index</p>
				</div>
				<div class="air-cond-p-info color">${place.current.uv}</div>
			</div> 
	    `;

		generateHtml(days);
	}
}

// Event handler which take name button and show forecast ===========
$(".cities").on("click", (e) => {
	let cityDiv = e.target.innerHTML;
	loadCity(cityDiv);
})

// Event handler which take city from input ===========
let temp = urlParams.get("city");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	proceedCity(event, input.value)
});

loadCity(temp)

// Event handler which take city from input too ===========
function proceedCity(e, text) {
	e.preventDefault();
	if (text) {
		loadCity(text);
	} else {
		alert("Please enter a city in the input");
	}
}
