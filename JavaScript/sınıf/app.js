const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");



 text.style.color = "red"
text.style.backgroundColor = "purple";

// text.classList.remove("change");
changeColor.addEventListener("click", function(){
    text.classList.toggle('change')
})