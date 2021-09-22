//get elements from the DOM
const body = document.querySelector("body");
const photoCredit = document.querySelector(".photocredit");

//this is scrimba's unsplash random image 'get ' link
//get the image from the api and diisplay it as background, along with the photographer
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
    })//data.urls.full); //data.user.name, data.user.portfolio_url, data.user.bio

//build a clock
//api for quote?
//weather api
