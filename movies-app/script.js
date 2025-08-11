const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=672365395bbd522b993490e5f2fdc52c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=672365395bbd522b993490e5f2fdc52c&query="'

let main=document.querySelector('#main')
let search= document.querySelector('#search')
let form= document.querySelector('#form')


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("submited");
    let search_Value=search.value.trim()
    // console.log(search_Value);

    if(search_Value ){
        getMovies(SEARCH_API+search_Value)
        search.value=''
    } else{
        window.location.reload();
    }
    
    
})

function getClassByReting(vote_average){
    if(vote_average>=8){
        return 'green'
    }else if(vote_average>=5){
        return 'orange'
    }else{
        return 'red'
    }
}

//loding get movies 
getMovies(API_URL)
async function getMovies(url){
  const res= await fetch(url)
  const data=await res.json()
//   console.log(data);
  
  showMovies(data.results)
}
function showMovies(movies){
main.innerHTML=''
movies.forEach((movie)=>{
    // console.log(movie);
    // const title=movie.title
    // const overview=movie.overview
    // const poster_path=movie.poster_path
    // const vote_average= movie.vote_average
    
    //destructring
const { title,overview,poster_path,vote_average}=movie
const movieEL=document.createElement('div')
movieEL.classList.add('movie')
movieEL.innerHTML=`
<img src="${IMG_PATH+poster_path}"></img>
<div class="movie-info">
<h3>${title}</h3>
<span class="${getClassByReting(vote_average)}">${vote_average}</span>
</div>

<div class="overview">
<h3>Overview</h3>
${overview}
</div>
`
main.appendChild(movieEL)
})
}