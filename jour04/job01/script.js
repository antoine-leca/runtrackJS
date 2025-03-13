let nouveauBtn = document.createElement("button");
nouveauBtn.setAttribute("id", "button");
nouveauBtn.textContent = "Montrer l'expression"; 
document.body.appendChild(nouveauBtn);

let msgBtn = document.getElementById("button").addEventListener("click", prendreExp);

function prendreExp() {
    fetch ("expression.txt")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        montrerMsg(data);
    })
    .catch(function(error) {
        console.error("Erreur", error)
    })
}

function montrerMsg(exp) {
    let nouveauP = document.createElement("p");
    nouveauP.setAttribute("id", "msg");
    nouveauP.textContent = exp;
    document.body.appendChild(nouveauP)
}

montrerMsg(msgBtn);