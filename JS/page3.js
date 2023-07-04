let scroll_up = document.querySelector(".scroll_up");

scroll_up.addEventListener("click",function(){
    window.scrollTo({
        top: 0, // Change this to the y-position you want to scroll to
        behavior: 'smooth' // This makes the scroll animation smooth
    });
})