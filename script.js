
let body = document.querySelector("body");
let box;

function createBox(top = 200, left = 200) {
    let box = document.createElement("div");
    
    box.className = "box";
    box.style.height = "150px";
    box.style.width = "150px";
    box.style.backgroundColor = "Black";
    box.style.position = "absolute";
    box.style.left = `${left}px`;
    box.style.top = `${top}px`;

    body.prepend(box);

    let deg = 1;
    let rotateInterval;

    box.addEventListener("pointerover", function (e) {
        rotateInterval = setInterval(() => {
            box.style.transform = `rotate(${deg}deg)`;
            deg += 1;
        }, 10);
    })

    box.addEventListener("pointerout", function (e) {
        clearInterval(rotateInterval);
    })

    box.addEventListener("click", function (e) {
        console.log(e.ctrlKey);
        if (e.ctrlKey == true) {
            console.log(e.currentTarget);
            e.currentTarget.remove();
        }
    })


    return box;
    
}

window.addEventListener("click", function (e) {
    console.log(e);
    if (e.ctrlKey == false) {
        box = createBox(e.y, e.x);
    }
})

window.addEventListener("keydown", function (e) {
    if (e.key == "ArrowDown") {
        box.style.backgroundColor = "blue";
        box.style.bottom = "100px";

    } 
    switch (e.key) {
        case "ArrowDown":
            box.style.backgroundColor = "blue";
            box.style.top = (Number(box.style.top.replace("px", "")) + 5) + "px";
            break;
        case "ArrowUp":
            box.style.backgroundColor = "red";
            box.style.top = (Number(box.style.top.replace("px", "")) - 5) + "px";
            break;
        case "ArrowRight":
            box.style.backgroundColor = "green";
            box.style.left = (Number(box.style.left.replace("px", "")) + 5) + "px";
            break;    
        case "ArrowLeft":
            box.style.backgroundColor = "yellow";
            box.style.left = (Number(box.style.left.replace("px", "")) - 5) + "px";
            break;   
        default:
            break;
    }
})




