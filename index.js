fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res=>res.json())
    .then(data=>console.log(data.user.name, data.user.portfolio_url, data.user.bio));