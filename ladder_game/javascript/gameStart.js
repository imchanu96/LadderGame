function ladderFnc(resultInfo){

    var headCount = resultInfo.headCount;
    var playerArr = new Array();
    playerArr = resultInfo.playerArr;
    var playerNameList = new Array();
    playerNameList = resultInfo.playerNameList;
    var resultList = new Array();
    resultList = resultInfo.resultList;

    var titleBox = document.getElementById("titleBox");


    titleBox.innerHTML = playerNameList + "<br>";

    for (let i = 0; i < playerArr.length; i++) {
        for (let j = 0; j < playerArr[0].length; j++) {
            
            titleBox.innerHTML = titleBox.innerHTML + playerArr[i][j];
        }
        titleBox.innerHTML = titleBox.innerHTML + "<br>"; 
    }
    titleBox.innerHTML = titleBox.innerHTML + resultList + "<br>";
}