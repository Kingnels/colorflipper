const btn = document.getElementById("click")
const color = document.querySelector(".color")
let bg = ["red","brown", 'grey', "gold","purple", "green", "rgb(130, 568, 463)", "#f1f5f8"];

btn.addEventListener('click',  ()=>{
    // alert('hi')
    const ranNum = getRandom()
    document.body.style.backgroundColor = bg[ranNum];
    color.style.color = bg[ranNum];
    color.textContent = bg[ranNum]
})

// getting a random number between zero and three
export const getRandom = ()=> Math.floor(Math.random() * bg.length)

