let EUR = 1.00;
let USD = 1.05;



document.getElementById("rechnen").addEventListener("click",function(){
    calculate()
})


function calculate(){
    let calculate = document.getElementById("calculate").value
    let kurs = getKurs(document.getElementById("waehrung2").value)/getKurs(document.getElementById("waehrung1").value)
    let result = calculate * kurs
    document.getElementById("calculated").value = result
    console.log(result)


}

function getKurs(waehrung){
    let kurs
    if(waehrung == "EUR"){
        kurs = EUR
    }else {
        kurs = USD
    }

    return kurs
}