function ladderFnc(resultInfo){

    var headCount = resultInfo.headCount;
    var ladderArr = resultInfo.ladderArr;
    var playerNameList = resultInfo.playerNameList;
    var resultList = resultInfo.resultList;

    //결과 확인용

    console.log(ladderArr);
  
    ///////////////////////////////innerHTML로는 구현//////////////////////////////////
    var resultTable = document.createElement("table");
    var displayList = new Array();
    resultTable.id = "resultTable";
    
    var tableSetWidth = headCount * 100 + "px;"; //테이블 총 크기
    var tdSetWidth = (headCount * 50 / (ladderArr.length + 2)) + "px;"; // 테이블의 각 td의 크기
    var tdFontSize = (30 - headCount) + "px;";
    console.log(displayList.length);
    resultTable.setAttribute("style", "width:" + tableSetWidth);

    for (let i = 0; i < ladderArr.length + 2; i++) {
        displayList[i] = new Array();
        
        var resultTr = document.createElement("tr");
        
        for (let j = 0; j < ladderArr[0].length; j++) {
            var resultTd = document.createElement("td");
            resultTd.setAttribute("style", "width:" + tdSetWidth + "font-size:" + tdFontSize);
            if((i == 0) && (j % 2 == 0)){
                displayList[i][j] = playerNameList[0];
                playerNameList = playerNameList.slice(1);

            }else if((i == ladderArr.length+1) && (j % 2 == 0)){
                displayList[i][j] = resultList[0];
                resultList = resultList.slice(1);

            }else if((i != 0) && (i != ladderArr.length+1)){
                displayList[i][j] = ladderArr[i-1][j];
            }else{
                displayList[i][j] = "";
            }

            resultTr.appendChild(resultTd);
        }
        
        resultTable.appendChild(resultTr);
    }

    console.log(tableSetWidth + tdSetWidth);
    //테이블 크기 맞추기
    titleBox.appendChild(resultTable);
    
    

    var ladderSection = null;
    //테이블에 해당 배열에 사다리의 형태를 div로 만들기
    for (let i = 0; i < displayList.length; i++) {
        for (let j = 0; j < displayList[0].length; j++) {
            ladderSection = document.getElementById("resultTable").children[i].children[j];
            if(displayList[i][j] == "ㅣ"){ // ㅣ div 태그로 변환
                var stick = document.createElement("div");
                stick.className = "verticalStick";
                ladderSection.appendChild(stick);
            }else if(displayList[i][j] == "ㅡ"){ // ㅡ div 태그로 변환
                var stick = document.createElement("div");
                stick.className = "horizontalStick";
                ladderSection.appendChild(stick);
            }else if(displayList[i][j] == "ㅏ"){
                var stick = document.createElement("div");
                stick.className = "joinStick1";
                ladderSection.appendChild(stick);
            }else if(displayList[i][j] == "ㅓ"){
                var stick = document.createElement("div");
                stick.className = "joinStick2";
                ladderSection.appendChild(stick);
            }else{
                ladderSection.innerHTML = displayList[i][j];
            }
        }
        
    }
    //////////////////////////결과창 띄우기/////////////////////////////
    var resultSection = document.createElement("div");
    titleBox.appendChild(resultSection);
    var x = 0, y = 0;
    for (let i = 0; i < ladderArr.length; i++) {
        for (let j = 0; j < ladderArr[0].length; j++) {
            if(ladderArr[x][y] == "ㅣ"){
                resultSection.innerHTML = resultSection.innerHTML + ladderArr[x][y];
                x += 1;
                i += 1;
            }else if(ladderArr[x][y] == "ㅏ"){
                resultSection.innerHTML = resultSection.innerHTML + ladderArr[x][y];
                x += 1;
                i += 1;
                y += 2;
                j += 2;
            }else if(ladderArr[x][y] == "ㅓ"){
                resultSection.innerHTML = resultSection.innerHTML + ladderArr[x][y];
                x += 1;
                i += 1;
                y -= 2;
                j -= 2;
            }
        }
        resultSection.innerHTML = resultSection.innerHTML + "<br>";
    }
    //결과값 생성중 *-----------------------------------------------------------------------------

    // var resultMap = new Map();

    // for (let i = 0; i < ladderArr.length; i++) {
    //     for(let j = 0; j < ladderArr[0].length; j++){
    //         resultMap.set(playerNameList[0], )
    //     }
    // }
}