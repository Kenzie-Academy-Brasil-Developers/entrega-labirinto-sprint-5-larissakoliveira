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
 
         //   victory(ducksPosition)
})



// let victory = (position) =>{
// let position = item.parentElement.dataset.lineColumn
//     if(position === position[8][20]){
//        return alert('parabens')
//     } 
  //  let position = item.parentElement.dataset.lineColumn
   // console.log(position + 'position')
  //  position = position.split('-')
  //  position = position[9][0]
// }


button.addEventListener('click', ()=>{
    let start = document.querySelector(`[data-line-column = "${9}-${0}"]`)
    start.appendChild(item)
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


