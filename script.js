
let main = document.querySelector("main");
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

    main.append(box);

    let deg = 1;
    let rotateInterval;

    box.addEventListener("pointerover", function () {
        rotateInterval = setInterval(() => {
            box.style.transform = `rotate(${deg}deg)`;
            deg += 1;
        }, 10);
    })

    box.addEventListener("pointerout", function () {
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

}

main.addEventListener("click", function (e) {
    console.log(e);
    if (e.ctrlKey == false && e.shiftKey == false && e.target.localName == "main") {
        createBox(e.y, e.x);
    }
})

window.addEventListener("keydown", function (e) {
    e.preventDefault;
    console.log(currentBox.style.top);
    console.log(currentBox.style.left);
    switch (e.key) {
        case "s":
        case "ArrowDown":
            if ((Number(currentBox.style.top.replace("px", ""))) < this.window.innerHeight - 250) {
                currentBox.style.top = (Number(currentBox.style.top.replace("px", "")) + 5) + "px";
            }
            break;
        case "w":
        case "ArrowUp":
            if ((Number(currentBox.style.top.replace("px", ""))) > 100) {
                currentBox.style.top = (Number(currentBox.style.top.replace("px", "")) - 5) + "px";
            } 
            break;
        case "d":
        case "ArrowRight":;
        if ((Number(currentBox.style.left.replace("px", ""))) < this.window.innerWidth - 170) {
            currentBox.style.left = (Number(currentBox.style.left.replace("px", "")) + 5) + "px";
        }
            break;
        case "a":
        case "ArrowLeft":
            if ((Number(currentBox.style.left.replace("px", ""))) > 0) {
                currentBox.style.left = (Number(currentBox.style.left.replace("px", "")) - 5) + "px";
            } 
            break;
        default:
            break;
    }
})


let button = document.querySelector("button");
let closeInstructionsButton = document.querySelector(".closeInstructions");


let instructions = document.querySelector(".instructions");


button.addEventListener("click", function () {
    instructions.classList.toggle("hide");
})

closeInstructionsButton.addEventListener("click", function () {
    instructions.classList.toggle("hide");
})




