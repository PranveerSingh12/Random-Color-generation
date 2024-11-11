let boxes = document.querySelector(".upperBox").children
        function randomColor(){
            let var1 = Math.ceil(0+Math.random()*255);
            let var2 = Math.ceil(0+Math.random()*255);
            let var3 = Math.ceil(0+Math.random()*255);
            return `rgb(${var1},${var2},${var3})`
        }

let btn = document.querySelector("#button")

btn.addEventListener("click",function(){
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = randomColor();
        
    });
    console.log(Array.from(boxes));
})
        