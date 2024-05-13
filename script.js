
let body = document.querySelector("body");
let box;
let currentBox;
let prevBox;

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

    box.addEventListener("click", function (e) {
        console.log(e.shiftKey);
        if (e.shiftKey == true) {
            prevBox = currentBox;
            if (prevBox) {
                prevBox.style.backgroundColor = "Black"
            }
            console.log(e.currentTarget);
            currentBox = e.currentTarget;
            currentBox.style.backgroundColor = "Cyan"
        }
    })


    return box;
    
}

window.addEventListener("click", function (e) {
    console.log(e);
    if (e.ctrlKey == false && e.shiftKey == false) {
        box = createBox(e.y, e.x);
    }
})

window.addEventListener("keydown", function (e) {

    switch (e.key) {
        case "ArrowDown":
            currentBox.style.top = (Number(currentBox.style.top.replace("px", "")) + 5) + "px";
            break;
        case "ArrowUp":
            currentBox.style.top = (Number(currentBox.style.top.replace("px", "")) - 5) + "px";
            break;
        case "ArrowRight":;
            currentBox.style.left = (Number(currentBox.style.left.replace("px", "")) + 5) + "px";
            break;    
        case "ArrowLeft":
            currentBox.style.left = (Number(currentBox.style.left.replace("px", "")) - 5) + "px";
            break;   
        default:
            break;
    }
})




