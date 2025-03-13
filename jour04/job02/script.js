function jsonValueKey(jsonStr, key) {
    try {
        let jsonObject = JSON.parse(jsonStr);
        return jsonObject[key]
    }
    catch (error) {
        console.error("Erreur", error)
        return null;
    }
}

let jsonStr= '{"name": "La Plateforme", "address": "8 rue d hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';

jsonValueKey(jsonStr, "city");
jsonValueKey(jsonStr, "creation");