let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let appleWeight = 0.34;
let bananaWeight = 0.22;


console.log("Äpfel pro Kilo: " + (1 / appleWeight));
console.log("Bananen pro Kilo: " + (1 / bananaWeight));
console.log("Preis pro Apfel: " + (applePricePerKilo / (1 / appleWeight)));
console.log("Preis pro Banane: " + (bananaPricePerKilo / (1 / bananaWeight)));
console.log("Preis von 8 Äpfeln: " + (8 * (applePricePerKilo / (1 / appleWeight))));
console.log("Preis von 17 Bananen: " + (17 * (bananaPricePerKilo / (1 / bananaWeight))));
console.log("Preis von 1 Tonne Äpfel: " + (applePricePerKilo * 1000));
console.log("Preis von 1 Tonne Bananen: " + (bananaPricePerKilo * 1000));