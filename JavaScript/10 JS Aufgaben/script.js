/*
Erstelle ein Programm welches einen Kalender korrekt darstellt, zu Beginn werden zwei 
Variablen definiert (Monat und Starttag) welche wir zur Darstellung der Monatstage (30/31 
Tage) und zum bestimmen des Tages an dem der Monat beginnt (Starttage O - Montag, 1 
- Dienstag usw.). 

Die Ausgabe soll wie folgt aussehen:
| Mo | Di | Mi | Do | Fr | Sa | So |
|    |    |  1 |  2 |  3 |  4 |  5 |
|  6 |  7 |  8 |  9 | 10 | 11 | 12 |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 |
| 20 | 21 | 22 | 23 | 24 | 25 | 26 |
| 27 | 28 | 29 | 30 |    |    |    |


*/








var month = 3;
var startDay = 3;
var days = null;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = 28;
        break;
}

console.log("| Mo | Di | Mi | Do | Fr | Sa | So |");
process.stdout.write("| ");
for(let i = 1; i <= days + startDay / 7; i++){
    if(i >= startDay){
        if(i-startDay+1 < 10){
            process.stdout.write(i-startDay+1 + "  | ");
        } else{
            process.stdout.write(i-startDay+1 + " | ");
        }
        
    } else{
        process.stdout.write("   | ");
    }
    if(i%7 == 0){
        if(i != days){
            console.log("");
            process.stdout.write("| ");
        }
    }
}