// const card = "card"
// const front = "cardFront"
// const back = "cardBack"

const board = document.getElementById("board")
const lives = document.querySelector("span")

function hard() {
    const initial = document.getElementById("inicialize")
     livesCount = 6
    initial.style.display = "none"
    lives.innerText = livesCount
}
function medium() {
    const initial = document.getElementById("inicialize")
     livesCount = 10
    initial.style.display = "none"
    lives.innerText = livesCount
}
function easy() {
    const initial = document.getElementById("inicialize")
     livesCount = 15
    initial.style.display = "none"
    lives.innerText = livesCount
}
//Text

//Data

const data = () => [
    {imgSrc: "./assets/sj1.png", name: "sj1"},
    {imgSrc: "./assets/sj1.png", name: "sj1"},
    {imgSrc: "./assets/sj2.png", name: "sj2"},
    {imgSrc: "./assets/sj2.png", name: "sj2"},
    {imgSrc: "./assets/sj3.png", name: "sj3"},
    {imgSrc: "./assets/sj3.png", name: "sj3"},
    {imgSrc: "./assets/sj4.png", name: "sj4"},
    {imgSrc: "./assets/sj4.png", name: "sj4"},
    {imgSrc: "./assets/sj5.png", name: "sj5"},
    {imgSrc: "./assets/sj5.png", name: "sj5"},
    {imgSrc: "./assets/sj6.png", name: "sj6"},
    {imgSrc: "./assets/sj6.png", name: "sj6"},
    {imgSrc: "./assets/sj7.png", name: "sj7"},
    {imgSrc: "./assets/sj7.png", name: "sj7"},
    {imgSrc: "./assets/sj8.png", name: "sj8"},
    {imgSrc: "./assets/sj8.png", name: "sj8"},
    {imgSrc: "./assets/sj9.png", name: "sj9"},
    {imgSrc: "./assets/sj9.png", name: "sj9"},
    {imgSrc: "./assets/sj10.png", name: "sj10"},
    {imgSrc: "./assets/sj10.png", name: "sj10"},
    {imgSrc: "./assets/sj11.png", name: "sj11"},
    {imgSrc: "./assets/sj11.png", name: "sj11"},
    {imgSrc: "./assets/sj12.png", name: "sj12"},
    {imgSrc: "./assets/sj12.png", name: "sj12"},
]
const shuffle = () =>{
    const cardData = data()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
    
}

//Cards
const cardGen = () => {
    const cardData = shuffle()
    cardData.forEach((item) => {
        const card = document.createElement("div")
        const front = document.createElement("img")
        const back = document.createElement("img")
        card.classList = "square"
        front.classList = "frontCard"
        back.classList = "backCard"
        board.appendChild(card)
        card.appendChild(front)
        card.appendChild(back)
        card.setAttribute("name", item.name) 
        front.src = item.imgSrc
        back.src = "./assets/sj.png"

        card.addEventListener("click", (e) => {
            card.classList.toggle("turn")
            checkCards(e)

        })



    })
    

}

const checkCards = (e) =>{
    const clicked = e.target
    clicked.classList.add("flipped")
    const turnCards = document.querySelectorAll(".turn")
    const flippedCards = document.querySelectorAll(".flipped")

  
    if(flippedCards.length === 2){
        if(
          flippedCards[0].getAttribute("name") === 
          flippedCards[1].getAttribute("name")
        ) {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped")
                card.style.pointerEvents = "none"

            })
           
        }
        else{
            console.log("wrong")
            const gameOver = document.getElementById("gameOver")
            flippedCards.forEach((card) => {
                card.classList.remove("flipped")
                setTimeout(() => card.classList.remove("turn"), 1200)


            })
            livesCount--
            lives.innerText = livesCount
            if(livesCount == 0){
                setTimeout(() => gameOver.style.display = "flex", 1000)
                
            }
        }
    }

    if(turnCards.length === 24){
    const win = document.getElementById("win")
            setTimeout(() => win.style.display = "flex", 1000)

    }

    
}



cardGen()



