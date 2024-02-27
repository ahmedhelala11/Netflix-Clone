

// video url = https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US
// image url =http://image.tmdb.org/t/p/original/



// let apiKey = "api_key=e2745c7474f31402fe316e8b22cc422a";
// let baseUrl = "https://api.themoviedb.org/3";
// let imgUrl = '/trending/movie/day?language=en-US&'

// let all = baseUrl + imgUrl + apiKey;
// console.log(all);

/*


BASE URL:
https://image.tmdb.org/t/p/original/

https://api.themoviedb.org/3/discover/movie?api_key=THE_KEY&language=en-US&page=1&with_genres=28
https://api.themoviedb.org/3/discover/movie?api_key=THE_KEY&language=en-US&page=1&with_genres=35
https://api.themoviedb.org/3/discover/movie?api_key=THE_KEY&language=en-US&page=1&with_genres=10749
https://api.themoviedb.org/3/discover/movie?api_key=THE_KEY&language=en-US&page=1&with_genres=99

*/


// let apiKey = "api_key=e2745c7474f31402fe316e8b22cc422a";
// let baseUrl = 'https://api.themoviedb.org/3'
// let image = 'http://image.tmdb.org/t/p/original/';

// const requests = {
//     fetchTrendine : `${baseUrl}/trending/all/week?${apiKey}&language=en-us`
// }
// console.log(requests.fetchTrendine);

// let section = document.getElementById('total');
// let headTitle = document.getElementById('title');
// let para = document.getElementById('description');

// fetch(apiKey).then(res => res.json()).then(data => )



























let apiKey = "api_key=e2745c7474f31402fe316e8b22cc422a";
let baseUrl = "https://api.themoviedb.org/3";
let imgUrl = '/trending/movie/day?language=en-US&';
let image = 'http://image.tmdb.org/t/p/original/';
let all = baseUrl + imgUrl + apiKey;

let section = document.getElementById('total');
let headTitle = document.getElementById('title');
let para = document.getElementById('description');
let logOut = document.getElementById('log-out')



fetch(all)
.then(requests => requests.json())
.then(function(data){
    let banner = data.results[Math.floor(Math.random() * data.results.length - 1)]
    headTitle.innerHTML = banner.title ? banner.title : banner.name;
    para.innerHTML = banner.overview.substr(0,109);
    section.style.backgroundImage = `url(${ image + banner.backdrop_path })`
    section.style.backgroundPosition = "center";
    section.style.backgroundAttachment = "scroll";
    section.style.backgroundSize = "cover"
    section.style.backgroundRepeat = " no-repeat"
    console.log(image + banner.backdrop_path);
})


logOut.addEventListener('click' , function(){
    localStorage.clear()
    setTimeout(() => {
        window.location = "register.html"
    }, 3000);
})

