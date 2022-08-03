const cards =document.querySelectorAll("card");
function flipcard(e){
    console.log(e.target);
}

cards.forEach(card=>{
    card.addEventListener("click", flipcard);
})