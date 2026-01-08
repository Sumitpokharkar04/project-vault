let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{

    document.getElementsByClassName("box")[0].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`


});

// important code snippet
// let boxes = document.querySelectorAll(".box");
// boxes[1].style.backgroundColor = "red";


        