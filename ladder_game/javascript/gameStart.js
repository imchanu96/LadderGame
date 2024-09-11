function ladderFnc(resultInfo){

    var headCount = resultInfo.headCount;
    var ladderArr = resultInfo.ladderArr;
    var playerNameList = resultInfo.playerNameList;
    var resultList = resultInfo.resultList;

    var titleBox = document.getElementById("titleBox");

    // titleBox.innerHTML = playerNameList + "<br>";  //결과 확인용

    // for (let i = 0; i < ladderArr.length; i++) { 
    //     for (let j = 0; j < ladderArr[0].length; j++) {
            
    //         titleBox.innerHTML = titleBox.innerHTML + ladderArr[i][j];
    //     }
    //     titleBox.innerHTML = titleBox.innerHTML + "<br>"; 
    // }
    // titleBox.innerHTML = titleBox.innerHTML + resultList + "<br>";
  
    ///////////////////////////////innerHTML로는 구현//////////////////////////////////
    var resultTable = document.createElement("table");
    var displayList = new Array();
    resultTable.id = "resultTable";
    for (let i = 0; i < ladderArr.length + 2; i++) {
        displayList[i] = new Array();

        var resultTr = document.createElement("tr");
        for (let j = 0; j < ladderArr[0].length; j++) {
            var resultTd = document.createElement("td");
            
            if((i == 0) && (j % 2 == 0)){
                displayList[i][j] = playerNameList[0];
                // resultTd.innerHTML = playerNameList[0];
                playerNameList = playerNameList.slice(1);
            }else if((i == ladderArr.length+1) && (j % 2 == 0)){
                displayList[i][j] = resultList[0];
                // resultTd.innerHTML = resultList[0];
                resultList = resultList.slice(1);
            }else if((i != 0) && (i != ladderArr.length+1)){
                // resultTd.innerHTML = ladderArr[i-1][j];
                displayList[i][j] = ladderArr[i-1][j];
            }else{
                displayList[i][j] = "";
            }

            resultTr.appendChild(resultTd);
        }
        
        resultTable.appendChild(resultTr);
    }

    //테이블 크기 맞추기
    titleBox.appendChild(resultTable);
    var tableSetWidth = headCount * 100 + "px";
    resultTable.setAttribute("style", "width:" + tableSetWidth);
    var tdSetWidth = (headCount * 100 / displayList.length) + "px";
    resultTd.setAttribute("style", "width:" + tdSetWidth);
    console.log(tableSetWidth + tdSetWidth);

    var ladderSection = null;
    //테이블에 해당 배열에 사다리의 형태를 div로 만들기
    for (let i = 0; i < displayList.length; i++) {
        for (let j = 0; j < displayList[0].length; j++) {
            ladderSection = document.getElementById("resultTable").children[i].children[j];
            if(displayList[i][j] == "ㅣ"){
                var stick = document.createElement("div");
                stick.className = "verticalStick";
                ladderSection.appendChild(stick);
            }else if(displayList[i][j] == "ㅡ"){
                var stick = document.createElement("div");
                stick.className = "horizontalStick";
                ladderSection.appendChild(stick);
            }else{
                ladderSection.innerHTML = displayList[i][j];
            }
        }
        
    }
    //////////////////////////태그로 사다리 만들기/////////////////////////////

    // console.log(displayList);
    
}