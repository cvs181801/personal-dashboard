//get elements from the DOM
const body = document.querySelector("body");
const photoCredit = document.querySelector(".photocredit");
const timeDiv = document.querySelector(".container__time");
const hourParagraph = document.createElement("p");
const minuteParagraph = document.createElement("p");
const secondParagraph = document.createElement("p");
const clockDisplayParagraph = document.createElement("p");
const cryptoDiv = document.querySelector(".container__crypto");
const dogeCoinName = document.createElement("p");
const dogeCoinThumb = document.createElement("img");
const dogeCoinCurrentPrice = document.createElement("p");

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
        })
    })
    .catch((error) => {
        console.log(error);
        dogeCoinName.textContent = "Crypto Currency Data Unavailable";
        cryptoDiv.append(dogeCoinName);
    })

//build a clock/current time display feature!

const pmTimes = {
    13: 1,
    14: 2,
    15: 3,
    16: 4,
    17: 5,
    18: 6,
    19: 7,
    20: 8,
    21: 9,
    22: 10,
    23: 11
}

function renderClock() {
    const clock = new Date();
    console.log(clock);
    const hour = clock.getHours();
    const minute = clock.getMinutes();
    const second = clock.getSeconds();
    if (hour >= 13) {
        switch(hour) {
            case 13: hour = pmTimes[13];
                break;
            case 14: hour = pmTimes[14];
                break;    
            case 15: hourParagraph.textContent = pmTimes[15];    
                break;
            case 16: hourParagraph.textContent = pmTimes[16];    
                break;   
            case 17: hourParagraph.textContent = pmTimes[17];    
                break;  
            case 18: hourParagraph.textContent = pmTimes[18];    
                break;  
            case 19: hourParagraph.textContent = pmTimes[19];    
                break;  
            case 20: hourParagraph.textContent = pmTimes[20];    
                break;  
            case 21: hourParagraph.textContent = pmTimes[21];    
                break;  
            case 22: hourParagraph.textContent = pmTimes[22];    
                break;    
            case 23: hourParagraph.textContent = pmTimes[23];    
                break;      
            }
        }
 
    clockDisplayParagraph.textContent = `${hour} : ${minute} : ${second}`;
    timeDiv.append(clockDisplayParagraph); 
    }

renderClock();


//api for quote?
//weather api
