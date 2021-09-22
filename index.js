//get elements from the DOM

//this is scrimba's unsplash random image 'get ' link
//get the image from the api and diisplay it as background, along with the photographer
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res=>res.json())
    .then(data=>console.log(data.user.name, data.user.portfolio_url, data.user.bio));

//build a clock
//api for quote?
//weather api
