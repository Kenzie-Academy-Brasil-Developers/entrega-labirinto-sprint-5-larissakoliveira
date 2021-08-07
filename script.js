const body = document.getElementsByTagName('body')[0]
const mainLabirinto = document.getElementById('labirinto')
const button = document.getElementById('restart')
const win = document.getElementById('victory')

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


let item;
let createSmallDiv;
let createBigDiv;

let createLabyrinth = ()=>{
    
    for(let i = 0; i < map.length; i++){
        createBigDiv = document.createElement('div')
        createBigDiv.classList.add('bigDiv')
        mainLabirinto.appendChild(createBigDiv)

        for(let j = 0; j < map[i].length; j++){
            createSmallDiv = document.createElement('div')
            createSmallDiv.dataset.lineColumn = `${i}-${j}`
            createSmallDiv.classList.add('smallDiv')
            createBigDiv.appendChild(createSmallDiv)
            
            if(map[i][j] === "S"){
                item = document.createElement('img')
                item.src = 'patin'
                createSmallDiv.appendChild(item)
            }
            if(map[i][j] === "W"){
                createSmallDiv.style.background = 'green'
                createSmallDiv.dataset.type = `wall`
            } 
            else{
                createSmallDiv.dataset.type = `way`
                createSmallDiv.style.background = 'cyan'
            }
        }
    }
    body.appendChild(mainLabirinto)
    return createBigDiv
}

createLabyrinth()


let ducksPosition;

document.addEventListener('keydown', (event) => {
        ducksPosition = item.parentElement.dataset.lineColumn
        ducksPosition = ducksPosition.split('-')
        let keyName = event.key
        let line = ducksPosition[0]
        let column = ducksPosition[1]


            if(keyName === 'ArrowUp'){
                line--
                let nextStep = document.querySelector(`[data-line-column = "${line}-${column}"]`)
                if(nextStep.dataset.type === 'way'){
                    nextStep.appendChild(item)
                }
            }if(keyName === 'ArrowDown'){
                line++
                let nextStep = document.querySelector(`[data-line-column = "${line}-${column}"]`)
                if(nextStep.dataset.type === 'way'){
                    nextStep.appendChild(item)
                }
            }if(keyName === 'ArrowRight'){
                column++
                let nextStep = document.querySelector(`[data-line-column = "${line}-${column}"]`)
                if(nextStep.dataset.type === 'way'){
                    nextStep.appendChild(item)
                }
            }if(keyName === 'ArrowLeft'){
                column--
                let nextStep = document.querySelector(`[data-line-column = "${line}-${column}"]`)
                if(nextStep.dataset.type === 'way'){
                    nextStep.appendChild(item)
                }
            }
        victory(line, column)
})


let victory = (line, column) => {
    if(Number(line) === 8 && Number(column) === 20){
        win.classList.replace('hidden', 'victory')
    }
}


button.addEventListener('click', ()=>{
    let start = document.querySelector(`[data-line-column = "${9}-${0}"]`)
    start.appendChild(item)
    win.classList.replace('victory', 'hidden')
})






