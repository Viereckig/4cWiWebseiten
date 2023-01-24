

let loadedData;
showLeagues("getavailableleagues");

function showLeagues(requestKey){
    const requestURL = "https://api.openligadb.de/" + requestKey;
    loadData(requestURL);
}

function loadData(requestURL){
    fetch(requestURL).then((result) => {
        result.json().then((data) => {
            loadedData = data;
            loadDropDown();
            writeDataToPage();
        })
    })
}

function loadDropDown(){
    var lookup = {};
    var result = [];

    loadedData.forEach(element => {
        if (!(element.leagueSeason in lookup)) {
            lookup[element.leagueSeason] = 1;
            result.push(element.leagueSeason);
        }
    })
    writeDataToDropDown(result);
}

function writeDataToDropDown(result){
    let html = "<option value='all'>alle</option>";

    result.forEach(element => {
        html+="<option value='" + element + "'>" + element + "</option>"
    });

    document.getElementById("yearselector").innerHTML=html;
}

function writeDataToPage(){
    let html = "";
    let counter = 0;

    loadedData.forEach(element => {
        if(document.getElementById("yearselector").value == "all"){
            html+="<div class='item' onclick='goToLeague(this)' leagueId='" + element.leagueId + "'>" + element.leagueName + "<br><br>" + element.leagueShortcut +"</div>";
            counter++;
        }else{
            if(element.leagueSeason == document.getElementById("yearselector").value){
                html+="<div class='item'>" + element.leagueName + "<br><br>" + element.leagueShortcut +"</div>";
                counter++;
            }
        }
    });



    document.getElementById("counter").innerHTML="Gefundene Elemente: " + counter;
    document.getElementById("container").innerHTML=html;
}

function goToLeague(element){
    let leagueId = element.attributes["leagueId"].value;

    let leagueShortcut;
    let leagueSeason;
    loadedData.forEach(element => {
        if(element.leagueId == leagueId){
            leagueShortcut = element.leagueShortcut;
            leagueSeason = element.leagueSeason;
        }
    });
    //TODO: Weiterleitung auf die Liga
}