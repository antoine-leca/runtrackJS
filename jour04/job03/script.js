function populateTypes() {
    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            let types = new Set();
            data.forEach(pokemon => {
                pokemon.type.forEach(type => types.add(type));
            });

            let typeSelect = document.getElementById("type");
            let sortedTypes = Array.from(types).sort(); // Convertir le Set en tableau et trier

            sortedTypes.forEach(type => {
                let option = document.createElement("option");
                option.value = type;
                option.textContent = type;
                typeSelect.appendChild(option);
            });
        })
        .catch(error => console.error("Erreur:", error));
}

// Appeler la fonction pour remplir le select au chargement de la page
populateTypes();

document.getElementById("button").addEventListener("click", function() {
    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            let id = document.getElementById("id").value;
            let name = document.getElementById("nom").value.toLowerCase();
            let type = document.getElementById("type").value;

            let filteredData = data.filter(pokemon => {
                return (id === "" || pokemon.id == id) &&
                       (name === "" || pokemon.name.french.toLowerCase().includes(name)) &&
                       (type === "" || pokemon.type.includes(type));
            });

            displayResults(filteredData);
        })
        .catch(error => console.error("Erreur:", error));
});

function displayResults(pokemons) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (pokemons.length === 0) {
        resultsDiv.innerHTML = "<p>Aucun résultat trouvé</p>";
        return;
    }

    pokemons.forEach(pokemon => {
        let pokemonDiv = document.createElement("div");
        pokemonDiv.innerHTML = `
            <h3>${pokemon.name.french}</h3>
            <p>ID: ${pokemon.id}</p>
            <p>Type: ${pokemon.type.join(", ")}</p>
        `;
        resultsDiv.appendChild(pokemonDiv);
    });
}