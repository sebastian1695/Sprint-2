//1. Definir array de jugadores 


const jugadoresArgentina = [
    {
        name: 'Lionel Messi',
        age: "35",
        team: "Argentina",
        NickName: "La Pulga",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lionel_Messi_WC2022.jpg/464px-Lionel_Messi_WC2022.jpg",
        position: "delantero",

    },
    {
        name: 'Angel Di Maria',
        age: "34",
        team: "Argentina",
        NickName: "El Fideo",
        image: "img/di maria.jpeg ",
        position: "delantero",


    },
    {
        name: 'Emiliano Martínez',
        age: "30",
        team: "Argentina",
        NickName: "El Dibú",
        image: "https://caracoltv.brightspotcdn.com/dims4/default/c766a3b/2147483647/strip/true/crop/1000x716+0+0/resize/1000x716!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F40%2Fd3%2F311e2199474aa388b32b76d0e8f4%2Femiliano-el-dibu-martinez.jpg",
        position: "arquero",
    },
    {
        name: 'Julián Álvarez',
        age: "22",
        team: "Argentina",
        NickName: "La Araña",
        image: "https://media.a24.com/p/f0b2dc67c610148c82c66f3c12639546/adjuntos/296/imagenes/009/089/0009089501/1200x675/smart/la-aranajpg.jpg",
        position: "delantero",

    },

];

const printJugadores =(listajugadores, contenedor)=>{
    contenedor.innerHTML = ''; 
    listajugadores.forEach(jugadores => {
        const article = document.createElement('article');
        article.classList.add('main___card');
        console.log(article.classList);
        article.innerHTML =`
        <figure class="card__image">
        <img src=${jugadores.image},alt="" ${jugadores.name}="">
        </figure>
        <h4 class="card__name"> ${jugadores.name}=</h4>`;
        console.log(jugadores.image);
        contenedor.appendChild(article)

    });
}

const main= document.querySelector('.main');

const contenedorCards = document.getElementById('contenedorCards');

//printJugadores(jugadoresArgentina,contenedorCards); 

document.addEventListener('DOMContentLoaded',() => {
    printJugadores(jugadoresArgentina, contenedorCards);
})

///acá debería funcionar el filtrado, pero por alguna razón no lo hace. CONTINUARÉ. No pude capturar los botones 
const botonAll = document.getElementById("all");
const botonArquero = document.getElementById("arquero");
const botonDelantero = document.getElementById("delantero");

console.log(botonAll);
console.log(botonArquero);
console.log(botonDelantero);

const filterButtons = [ botonAll, botonArquero, botonDelantero]; 

filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
    console.log(button)
    console.log(event);
    console.log(event.target.id)
    console.log(button.id)

    let jugadoresFiltrados= []

    if (button.id === "all") {
        const jugadoresFiltrados = jugadoresArgentina;
    }else{ jugadoresFiltrados =  jugadoresArgentina.filter( jugador => jugador.position === button.id )

    }
    console.log(jugadoresFiltrados);
    printJugadores(jugadoresFiltrados, contenedorCards)

});
});

//otra manera

const positionJugadores = jugadoresArgentina.map(jugador=> jugador.position);
console.log(positionJugadores)

const setPosition = new  Set(positionJugadores);
console.log(setPosition);

const position = [...setPosition]
console.log(position)

//ya sirvió, era poner comillas. 
