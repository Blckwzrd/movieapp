//Informacion de la api

const apiUrl='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH="https://image.tmdb.org/t/p/w1280";
const SEARCHAPI= "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//seleccionando elementos
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

/*llamada a la funcion showMovies que hara la peticion de la pelicula
desde la api usando fetch.
luego pondra esos datos en el Main html tag creando elementos para esos datos*/
showMovies(apiUrl);
function showMovies (url) {
    fetch(url).then(res=> res.json())
    .then(function(data){
        console.log(data.results)
        data.results.forEach(element=>{
            //creando elementos para nuestra data al interior de nuestro main tag.
            const el = document.createElement('div');
            const image = document.createElement('img');
            const text = document.createElement('h2');
        
            text.innerHTML =  `${element.title}`;
            image.src =IMGPATH + element.poster_path;
            el.appendChild(image);
            el.appendChild(text);
            main.appendChild(el);

        });
    });
}
 
//prevenir que la form se envie si la barra de busqueda esta vacia

form.addEventListener("submit",(e)=>{
e.preventDefault();
main.innerHTML='';

const searchTerm = search.value;

/*agregando el valor writen en la barra de busqueda en orden
para conectarnos con la api y obtener la movie que estamos buscando*/

if(searchTerm) {
    showMovies(SEARCHAPI+searchTerm)
    search.value ="";

}
});