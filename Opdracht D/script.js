var container = document.getElementById("container");
container.style.maxWidth = "600px";
container.style.margin = "0 auto";
container.style.backgroundColor = "grey";
const BUTTONAMOUNT = 60;
const CLICKS = ["red", "purple", "black"];
for (let index = 1; index < BUTTONAMOUNT+1; index++) {
    var button = document.createElement("button");
    button.innerHTML = index;
    button.id = "button"+index;
    button.style.backgroundColor = "green";
    button.style.margin = "10px";
    button.style.height = "50px";
    button.style.width = "100px";
    button.style.fontSize = "25px";
    container.appendChild(button);
    document.getElementById("button"+index).addEventListener("click", function(){
        pressed(document.getElementById("button"+index));
    });
}

function pressed(button){
    if(button.style.backgroundColor == "black"){
        button.remove();
    }
    else if(button.style.backgroundColor == "green"){
        button.style.backgroundColor = CLICKS[0];
    }
    else{
        for (let i = CLICKS.length; i >= 0; i--) {
            if(button.style.backgroundColor == CLICKS[i]){
                button.style.backgroundColor = CLICKS[i+1]
            }
        }
    }
    
}