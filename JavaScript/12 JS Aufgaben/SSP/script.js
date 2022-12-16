
document.getElementById("play").addEventListener("click",function(){
    lookforWinner()
})


function lookforWinner(){
    let player = document.getElementById("selection").value
    let botResult = bot()

    document.getElementById("botSelect").innerHTML = "Der Bot hat " + getssp(botResult) + " gewählt!"
    if(player == botResult){
        document.getElementById("result").innerHTML = "Unentschieden"
    }else if(player == 2 && botResult == 1){
        document.getElementById("result").innerHTML = "Du hast gewonnen"
    }else if(player == 1 && botResult == 3){
        document.getElementById("result").innerHTML = "Du hast gewonnen"
    }else if(player == 3 && botResult == 2){
        document.getElementById("result").innerHTML = "Du hast gewonnen"
    }else{
        document.getElementById("result").innerHTML = "Du hast verloren"
    }
}



function bot(){
    var bot = Math.floor(Math.random() * 3);
    return bot;
}

function getssp(bot){
    let ssp
    if(bot == 0){
        ssp = "Stein"
    }else if(bot == 1){
        ssp = "Schere"
    }else{
        ssp = "Papier"
    }
    return ssp
}