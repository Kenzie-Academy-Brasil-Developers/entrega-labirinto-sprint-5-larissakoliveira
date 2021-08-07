const body = document.getElementsByTagName('body')[0]
const mainLabirinto = document.getElementById('labirinto')
const button = document.getElementById('restart')

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
                createSmallDiv.style.background = 'blue'
                createSmallDiv.dataset.type = `wall`
            } 
            else{
                createSmallDiv.dataset.type = `way`
            }
        }
    }
    body.appendChild(mainLabirinto)
    return createBigDiv
}

createLabyrinth()

                //primeiro pega o proximo elemento no html pelo queryselector
               //verificar se ele é parede
               //ses nao for, fazer o append, se for nao fazer nada

document.addEventListener('keydown', (event) => {
        let ducksPosition = item.parentElement.dataset.lineColumn
        ducksPosition = ducksPosition.split('-')
        console.log(ducksPosition + 'ducksposition')
        let keyName = event.key
        let linha = ducksPosition[0]
        console.log(linha + 'linha')
        let coluna = ducksPosition[1]
        console.log(coluna + 'coluna')

            if(keyName === 'ArrowUp'){
            //     coluna--
            //     console.log(coluna)
            //     let proximap = document.querySelector(`[data-line-column = "${linha}-${coluna}"]`)
            //   // proximap.value === 'W'

            //     console.log(proximap.dataset.type)
   
              createSmallDiv.appendChild(item)
            }if(keyName === 'ArrowDown'){

            }if(keyName === 'ArrowRight'){
                coluna++
                let proximap = document.querySelector(`[data-line-column = "${linha}-${coluna}"]`)
                if(proximap.dataset.type === 'way'){
                    console.log(item)
                    proximap.appendChild(item)
                    console.log(proximap)
                }
                console.log(proximap.value)
            }if(keyName === 'ArrowLeft'){
                
            }
})














   //    win()
    // duck.style.left = boxLeft + 'px'
    // duck.style.top = boxTop + 'px'


// let boxTop = 270;
// let boxLeft = 0;
//let duck = document.getElementsByTagName('img')[0]

// restart.addEventListener('click', ()=>{
//     duck.style.left = boxLeft + 'px'
//     duck.style.top = boxTop + 'px'
// })


// let updateMap = () =>{
//     for(let i = 0; i < map.lengtsmallDivh; i++){
//         for(let j = 0; j < map[i].length; j++){
//             map.push()
//         }
//     }
// }



// //CONDICAO DE VITORIA SE CHEGAR NO 240, 600

// let win = () =>{
//     if(boxTop === 240 && boxLeft === 600){
//         alert('voce ganhou')
//     }
// }



// document.addEventListener('keydown', (event) =>{
//     let keyName = event.key

//         if(keyName === 'ArrowUp' && boxTop > 0){
//             boxTop -= 30
//         }if(keyName === 'ArrowDown' && boxTop < 420){
//             boxTop += 30
//         }if(keyName === 'ArrowRight' && boxLeft < 600){
//             boxLeft += 30
//         }if(keyName === 'ArrowLeft' && boxLeft > 0){
//             boxLeft -= 30
//         }
//     //    win()
//     // duck.style.left = boxLeft + 'px'
//     // duck.style.top = boxTop + 'px'
// })


