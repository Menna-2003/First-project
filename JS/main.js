let nameText = document.getElementById("name");
let text = document.getElementById("text");
let submitButton = document.getElementById("submitButton");
let thanks = document.getElementById("thanks");

submitButton.addEventListener('click',function(){
    nameText.value = "";
    text.value = "";
    thanks.style.display = "grid";
    setTimeout(function(){
        thanks.style.display = "none";
    },2000)
})

let scroll_up = document.querySelector(".scroll_up");

scroll_up.addEventListener("click",function(){
    window.scrollTo({
        top: 0, // Change this to the y-position you want to scroll to
        behavior: 'smooth' // This makes the scroll animation smooth
    });
})
