let  nouvelArt = document.createElement("article");
nouvelArt.textContent = "La vie a beaucoup plus d'imagination que nous";
nouvelArt.setAttribute("id", "citation");
document.body.appendChild(nouvelArt);

let nouveauBtn = document.createElement("button");
nouveauBtn.setAttribute("id", "button")
document.body.appendChild(nouveauBtn);

let artText = document.getElementById("citation");
let artBtn = document.getElementById("button");

function citation() {
    artBtn.addEventListener("click", function() {
        console.log(artText.textContent);
    });
}

citation();