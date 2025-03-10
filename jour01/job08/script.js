function sommeNombresPremiers(val1, val2) {
    function estPremier(nombre) {
        if (nombre <= 1) return false;
        for (let i = 2; i < nombre; i++) {
            if (nombre % i === 0) return false;
        }
        return true;
    }

    if (estPremier(val1) && estPremier(val2)) {
        return val1 + val2;
    } else {
        return false;
    }
}

console.log(sommeNombresPremiers(7, 19));
console.log(sommeNombresPremiers(8, 14));
