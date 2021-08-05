const body = document.getElementsByTagName('body')[0]
const mainLabirinto = document.getElementById('labirinto')

let map = [
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

let createLabyrinth = ()=>{
    
    for(let i = 0; i < map.length; i++){
        createBigDiv = document.createElement('div')
        createBigDiv.classList.add('bigDiv')
        mainLabirinto.appendChild(createBigDiv)

        for(let j = 0; j < map[i].length; j++){
            let createSmallDiv = document.createElement('div')
            createSmallDiv.classList.add('smallDiv')
            createBigDiv.appendChild(createSmallDiv)

            if(map[i][j] === "S"){
                let item = document.createElement('img')
                item.src = 'patin'
                createSmallDiv.appendChild(item)
            }
            if(map[i][j] === "W"){
                createSmallDiv.style.backgroundColor = 'blue'
            } 
            else{
                createSmallDiv.style.backgroundColor = 'white'
            }
        }
    }
    body.appendChild(mainLabirinto)
    return createBigDiv
}

createLabyrinth()

let boxTop = 270;
let boxLeft = 0;

document.addEventListener('keydown', (event) =>{
    let duck = document.getElementsByTagName('img')[0]
    let keyName = event.key

        if(keyName === 'ArrowUp'){
            boxTop -= 30
        }if(keyName === 'ArrowDown'){
            boxTop += 30
        }if(keyName === 'ArrowRight'){
            boxLeft += 30
        }if(keyName === 'ArrowLeft'){
            boxLeft -= 30
        }

    duck.style.left = boxLeft + 'px'
    duck.style.top = boxTop + 'px'
})

