let player={
    name:"Sadhak",
    chips:145
}
let cards=[]
let sum=0
let hasbalckjack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")

let playerinfo=document.getElementById("player-el")
playerinfo.textContent=player.name+": "+player.chips

function getRandomCard(){
    let num=Math.floor(Math.random()*13)+1
    if(num===1){
        return 11
    }
    else if(num>10){
        return 10
    }
    else{
        return num
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard(), secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards: "
    for(let n=0;n<cards.length;n++){
        cardsEl.textContent+=cards[n]+" "
    }
    sumEl.textContent="Sum: "+ sum
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21)
    {
        message="You got balckjack!"
        hasbalckjack=true
    }
    else
    {
        message="you are out of the game"
        isAlive=false
    }
    messageEl.textContent=message
}
function newCard(){
    if(isAlive===true && hasbalckjack===false){
        let card= getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}

//4.15

