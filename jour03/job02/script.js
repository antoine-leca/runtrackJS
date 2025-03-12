for (i=1; i<=6; i++) {
    let nouvelleImg = document.createElement("img");
    nouvelleImg.setAttribute("id", `img${i}`);
    nouvelleImg.setAttribute("src", `arc${i}.png`)
    document.body.appendChild(nouvelleImg)
}

let nouveauBtnM= document.createElement("button");
nouveauBtnM.setAttribute("id", "buttonM");
nouveauBtnM.textContent = "Mélanger les images"; 
document.body.appendChild(nouveauBtnM);

let verifierBtn = document.createElement("button");
verifierBtn.setAttribute("id", "verifierBtn");
verifierBtn.textContent = "Vérifier l'ordre";
document.body.appendChild(verifierBtn);

let message = document.createElement("p");
message.setAttribute("id", "message");
document.body.appendChild(message);

function melangerImages() {
    let images = document.querySelectorAll("img");
    let imagesTab = Array.from(images);
    imagesTab.sort(() => Math.random() - 0.5);
    imagesTab.forEach(img => document.body.appendChild(img));
}

nouveauBtnM.addEventListener("click", melangerImages);

function verifierOrdre() {
    let images = document.querySelectorAll("img");
    let ordreC = true;
    images.forEach((img, index) => {
        if (img.id !== `img${index + 1}`) {
            ordreC = false;
        }
    });

    let message = document.getElementById("message");
    if (ordreC) {
        message.textContent = "Vous avez gagné";
        message.style.color = "green";
    } else {
        message.textContent = "Vous avez perdu";
        message.style.color = "red";
    }
}

verifierBtn.addEventListener("click", verifierOrdre);