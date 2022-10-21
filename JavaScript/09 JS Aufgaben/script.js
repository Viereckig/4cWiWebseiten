//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert: 
//X X X X 
//O O O O 
//X X X X 
//O O O O 

//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 

let size = 4;
for (let row = 0; row < size; row++) {
    if (row % 2 == 0) {
        for (let column = 0; column < size; column++) {
            process.stdout.write("X ");
        }
    } else {
        for (let column = 0; column < size; column++) {
            process.stdout.write("O ");
        }
    }
    console.log("");
}