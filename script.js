const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const reset = document.getElementById("reset")
const count = document.getElementById("count")

let counted = 0

minus.addEventListener("click", subtract)
plus.addEventListener("click", add)
reset.addEventListener("click", resetted)

function subtract(){
    counted--
    count.innerText= `${counted}`
}

function add(){
    counted++
    count.innerText= `${counted}`
}

function resetted(){
    counted=0
    count.innerText="0"
}