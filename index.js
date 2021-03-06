//get elements from the DOM
const body = document.querySelector("body");
const photoCredit = document.querySelector(".photocredit");
const weatherDiv = document.querySelector(".container__weather");
const weatherIcon = document.createElement("img");
const weatherTemp = document.createElement("p");
const weatherDescription = document.createElement("p");
const weatherLocation = document.createElement("p");
const timeDiv = document.querySelector(".container__time");
const timeParagraph = document.querySelector(".time__paragraph");
const clockDisplayParagraph = document.createElement("p");
const cryptoDiv = document.querySelector(".container__crypto");
const dogeCoinName = document.createElement("p");
const dogeCoinThumb = document.createElement("img");
const dogeCoinCurrentPrice = document.createElement("p");
const dogeCoinDescription = document.querySelector(".crypto__coinDescriptionP");
const fourthDiv = document.querySelector(".container__div4");

//this is scrimba's unsplash random image 'get ' link
//get the image from the api and display it as background, along with the photographer
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        body.style.backgroundImage = `url('${data.urls.full}')`;
        if (data.user.bio) {
        photoCredit.textContent = `Photo by: ${data.user.name}. About ${data.user.name}: ${data.user.bio}`;
        } else {
            photoCredit.textContent = `Photo by: ${data.user.name}.`;
        }
    })
    .catch( (error) => {
        console.log(error);
        timeDiv.textContent = "I'm sorry, something went wrong. Please try again!"
        timeDiv.style.fontSize = "2rem";
        body.style.backgroundColor = "rgb(24, 22, 22)";
        body.style.backgroundImage = "url('/Users/casvalkyriespicer/Documents/GitHub/personal-dashboard/pics/sademojis.jpg')";
        body.style.backgroundBlendMode = "multiply";
    });
    
//pull info on Dogecoin from the CoinGecko API

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then((response) => {
        if (!response.ok) {
            throw Error ("Something went wrong")
        } 
           response.json()
    .then((data) => {
        console.log(data);
        console.log(data.market_data.current_price.usd);
        dogeCoinName.textContent = data.name;
        dogeCoinThumb.src = data.image.small;
        dogeCoinCurrentPrice.textContent = "$USD: " + data.market_data.current_price.usd.toFixed(2);
        cryptoDiv.append(dogeCoinName);
        cryptoDiv.append(dogeCoinThumb);
        cryptoDiv.append(dogeCoinCurrentPrice);

            dogeCoinThumb.addEventListener("mouseover", function(e) {
                e.preventDefault();
                dogeCoinDescription.innerHTML = data.description.en;
                fourthDiv.append(dogeCoinDescription);
                //fourthDiv.style.transition = "all 1s ease-in-out";
                console.log(data.description.en);
                dogeCoinDescription.classList.remove("hidden");
            })
            dogeCoinThumb.addEventListener("mouseout", function(e){
                e.preventDefault();
                dogeCoinDescription.textContent = "";
                //fourthDiv.style.transition = "all 1s ease-in-out";
                dogeCoinDescription.classList.add("hidden");
            })
        })
    })
    .catch((error) => {
        console.log(error);
        dogeCoinName.textContent = "Crypto Currency Data Unavailable";
        cryptoDiv.append(dogeCoinName);
    })

//build a clock/current time display feature!

let clock = new Date();

function renderClock() {
    clock = new Date();
    clockDisplayParagraph.textContent = clock.toLocaleTimeString('en-US', {timeStyle: "short"});
    timeDiv.insertBefore(clockDisplayParagraph, timeParagraph);
    }

setInterval(renderClock, 1000);

//**For another clock solution scroll to bottom ***

//weather api

let latitude;
let longitude;

function getWeatherAtPosition(lat, lon) {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial`)  //&units=${imperial}
        .then((response) => {
            if (!response.ok) {
                throw Error ("Something went wrong")
            } 
            response.json()
        .then((data) => {
            console.log(data);
            console.log(data.main.temp, data.name);
            console.log(data.weather[0].description, data.weather[0].icon);
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherDiv.append(weatherIcon);
            weatherLocation.textContent = data.name;
            weatherDiv.append(weatherLocation);
            weatherDescription.textContent = data.weather[0].description;
            weatherDiv.append(weatherDescription);
            weatherTemp.innerHTML = `temperature(&#8457): ${data.main.temp}`;
            weatherDiv.append(weatherTemp);
            console.log(lat);
            console.log(lon);
        })
    })

    .catch((error) => {
        console.log(error);
        weatherDescription.textContent = "Weather Data Unavailable";
        weatherDiv.append(weatherDescription);
    })
}

function getLatLon() {
    navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log("latitude =" + latitude, "longitude =" + longitude);
        return getWeatherAtPosition(latitude, longitude);
    })
}

getLatLon();


//*** another solution for creating and rendering clock** */
// const hourParagraph = document.createElement("p");
// const minuteParagraph = document.createElement("p");
// const secondParagraph = document.createElement("p");
// const amPmParagraph = document.createElement("p");
// amPmParagraph.style.padding = ".5em";

// const clock = new Date();
// console.log(clock);
// let hour = clock.getHours();
// let minute = clock.getMinutes();
// let second = clock.getSeconds();

// function determinAmOrPm(hour) {
//     if (hour >= 13) {
//         amPmParagraph.textContent = "PM";
//     } else {
//         amPmParagraph.textContent = "AM";
//     }
// }

// function renderMinute(num) {
//     if (minute > 10) {
//         return `0${num}`; 
//     }  
// }  

// function renderSecond(num) {
//     if (second > 10) {
//         return `0${num}`;
//     }
// }

 //function renderClock() {  
//     determinAmOrPm();
//     if (hour >= 13) {
//         switch(hour) {
//             case 13: hour = "1";   
//                 break;
//             case 14: hour = "2"; 
//                 break;    
//             case 15: hour = "3";    
//                 break;
//             case 16: hour = "4";   
//                 break;   
//             case 17: hour = "5"; 
//                 break;  
//             case 18: hour = "6";   
//                 break;  
//             case 19: hour = "7";   
//                 break;  
//             case 20: hour = "8";    
//                 break;  
//             case 21: hour = "9";     
//                 break;  
//             case 22: hour = "10";     
//                 break;    
//             case 23: hour = "11";    
//                 break;      
//             }
        // }
    
//     renderMinute(minute);
//     renderSecond(second);    
//     clockDisplayParagraph.textContent = `${hour} : ${minute} : ${second}`;
//     timeDiv.append(clockDisplayParagraph); 
//     timeDiv.append(amPmParagraph);
//     }

//renderClock();