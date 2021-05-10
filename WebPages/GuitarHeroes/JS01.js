const theButtons = document.getElementsByClassName("buttons");
const theContainer = document.getElementsByClassName("container")[0];
document.addEventListener("keydown", typeme);

function executeHit() {

    var toAnimate = document.getElementById("sonoio");

    var y = 0;
    var id = 0;
    clearInterval(id);

    id = setInterval(frame, 15);

    function frame() {
        y++;
        toAnimate.style.bottom = y + "%";
        if (y == 15) {
            toAnimate.remove();
            clearInterval(id);
        }
    }

}


function drawResult(result, a) {
    let popup = document.createElement("p");
    let poptext = document.createTextNode(result);
    popup.appendChild(poptext);
    popup.className = "hitmarks";
    popup.id = "sonoio";
    popup.style.position = "absolute";
    popup.style.bottom = "0%";
    popup.style.left = a;
    popup.style.userSelect = "none";
    theButtons[0].insertBefore(popup, theButtons[0].firstChild);
    executeHit();
}

function createHit(a) {
    var allFalling = document.getElementsByClassName("isFalling");
    let firstInCase = allFalling[0];

    var realValue = firstInCase.style.left;


    const b = parseInt(a) - 4;
    let currValue = b + "%";



    if (realValue == currValue) {

        const testlocal1 = parseInt(firstInCase.style.top);
        console.log(testlocal1);
        if (testlocal1 >= 74) {
            drawResult("good", a)
            firstInCase.remove();
            console.log("hey");

        } else {

        }
    }
}

function typeme(event) {
    var pos = event.key;
    console.log(pos);
    switch (pos) {
        case 'd':
            createHit("20%");
            break;
        case 'f':
            createHit("40%");
            break;
        case 'j':
            createHit("60%");
            break;
        case 'k':
            createHit("80%");
            break;
        default:
            break;
    }
}


function fallTime(givenNote) {

    givenNote.className = "isFalling";

    let count2 = -8;
    let id = 0;
    clearInterval(id);

    id = setInterval(() => {
        givenNote.style.top = count2 + "%";
        count2++;
        if (count2 == 100) {
            givenNote.remove();
            clearInterval(id);
        }
    }, 15);
}

var createFallingNote = function(column) {
    let newNote = document.createElement("p");
    newNote.className = "fallingNote";
    newNote.style.top = "-6%";
    newNote.style.left = (20 * column) - 4 + "%";
    theContainer.append(newNote);
    return newNote;
}

var startGame = function() {
    $("#disappear1").remove();

    var count1 = 0;
    var id = 0;
    clearInterval(id);

    id = setInterval(() => {
        let pospos = Math.floor(Math.random() * 4) + 1;
        var givenNote = createFallingNote(pospos);
        fallTime(givenNote);
        count1++;
        if (count1 == 30) {
            clearInterval(id);
        }

    }, 500);

}