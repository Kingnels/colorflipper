// import { getRandom } from "./index"

const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
// hex = #F34892
const btn = document.getElementById("click")
const color = document.querySelector(".color")

btn.addEventListener('click', ()=>{
    let hexColor = '#';
    for (let x = 0; x < 6; x++){
        hexColor += hex[getRandom()];
    }
    document.body.style.backgroundColor = hexColor;
    color.style.color = hexColor;
    color.textContent = hexColor;
})
getRandom = ()=> Math.floor(Math.random() * hex.length)