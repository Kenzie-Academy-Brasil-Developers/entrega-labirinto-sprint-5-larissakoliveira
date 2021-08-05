const body = document.getElementsByTagName('body')[0]
const mainLabirinto = document.getElementById('labirinto')

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];


function createLines(){

    for(let i = 0; i < map.length; i++){
        let createBigDiv = document.createElement('div')
        createBigDiv.classList.add('bigDiv')
        mainLabirinto.appendChild(createBigDiv)
        for(let j = 0; j < map[i].length; j++){
            let createSmallDiv = document.createElement('div')
            createSmallDiv.classList.add('smallDiv')
         //   createSmallDiv[9][0].classList.remove('smallDiv')
         //   createSmallDiv[9][map[9].length-1].classList.remove('smallDiv')
         //   createSmallDiv[9][0].classList.add('exceptions')
          //  createSmallDiv[9][map[9].length-1].classList.add('exceptions')
            createBigDiv.appendChild(createSmallDiv)
        if(map[i][j] === "W"){
            createSmallDiv.style.backgroundColor = 'blue'
        }else{
            createSmallDiv.style.backgroundColor = 'white'

        }
        }
    }
    body.appendChild(mainLabirinto)
    return createBigDiv
}


createLines()


// voce vai usar esse array como base, onde cada string daí é uma linha do seu labirinto, então um loop aninhado pra poder percorrer, cada posição da string uma div, onde for vazia vai ser caminho, onde for W de wall, vai ser parede

// e depois seu bichinho/item/algo vai iniciar no S e tem que percorrer os vazios até chegar no F

// Faça com que cada célula do labirinto seja um DIV.
// Faça de cada linha do labirinto um DIV usando "display: flex;"