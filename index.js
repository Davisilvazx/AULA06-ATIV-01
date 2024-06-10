function contarVogais(string) {
    string = string.toLowerCase();
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            contadorVogais++;
        }
    }
    return contadorVogais;
}
const stringUsuario = prompt("Digite uma palavra:");
const numeroVogais = contarVogais(stringUsuario);
console.log("Número de vogais na palavra:", numeroVogais);
