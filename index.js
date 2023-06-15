
//this is for the animation on the top of the homepage. 
document.addEventListener("DOMContentLoaded",function() {
    const texts=document.querySelectorAll(".text");
    const disappearDelay=3000; //unit in millisecond
    const newText="Welcome. You are home now.";

    setTimeout(function() {
        texts.forEach(function(text) {
            text.style.opacity=0;  
        });

        setTimeout(function() {
            const container=document.querySelector(".container");
            container.innerHTML="<h4 class='text'>"+newText+"</h4>";
        },2000); //delay before showing the new text
    },disappearDelay);

});


