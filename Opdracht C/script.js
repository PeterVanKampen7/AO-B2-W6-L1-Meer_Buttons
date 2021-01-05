var container = document.getElementById("container");
container.style.maxWidth = "600px";
container.style.margin = "0 auto";
container.style.backgroundColor = "grey";
const BUTTONAMOUNT = 30;
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
    if(button.style.backgroundColor == "green"){
        button.style.backgroundColor = "red";
    }
    else if(button.style.backgroundColor == "red"){
        button.style.backgroundColor = "purple";
    }
    else if(button.style.backgroundColor == "purple"){
        button.style.backgroundColor = "blue";
    }
    else if(button.style.backgroundColor == "blue"){
        button.style.backgroundColor = "black";
    }
    else if(button.style.backgroundColor == "black"){
        button.remove();
    }
}