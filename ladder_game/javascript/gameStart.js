function ladderFnc(resultInfo){

    var titleBox = document.getElementById("titleBox");

    for (let i = 0; i < playerArr.length; i++) {
        for (let j = 0; j < playerArr[0].length; j++) {
            
            titleBox.innerHTML = titleBox.innerHTML + playerArr[i][j];
        }
        titleBox.innerHTML = titleBox.innerHTML + "<br>"; 
    }
}