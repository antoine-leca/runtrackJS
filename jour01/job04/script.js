function Bisextile(année) {
    if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
        console.log("oui");
        return true;
    } else {
        console.log("non");
        return false;
    }
}
Bisextile(2024);
Bisextile(2025);