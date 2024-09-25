var colorArr = ["red", "orange", "yellow", "green", "blue", "navy", "pink", "brown", "white", "aquamarine"];

function ladderFnc(resultInfo){

    var headCount = resultInfo.headCount;
    var ladderArr = resultInfo.ladderArr;
    var playerNameList = resultInfo.playerNameList;
    var resultList = resultInfo.resultList;
    ///////////////////////////////innerHTML로는 구현//////////////////////////////////
    var resultTable = document.createElement("table");
    var displayList = new Array();
    resultTable.id = "resultTable";
    
    var tableSetWidth = headCount * 100 + "px;"; //테이블 총 크기
    var tdSetWidth = (headCount * 50 / (ladderArr.length + 2)) + "px;"; // 테이블의 각 td의 크기
    var tdFontSize = (30 - headCount) + "px;";
    resultTable.setAttribute("style", "width:" + tableSetWidth);

    for (let i = 0; i < ladderArr.length + 2; i++) {
        displayList[i] = new Array();
        
        var resultTr = document.createElement("tr");
        
        for (let j = 0; j < ladderArr[0].length; j++) {
            var resultTd = document.createElement("td");
            if((i == 0) && (j % 2 == 0)){
                resultTd.setAttribute("style", "width:" + tdSetWidth + "font-size:" + tdFontSize);
                displayList[i][j] = playerNameList[0];
                playerNameList = playerNameList.slice(1);
            }else if((i == ladderArr.length+1) && (j % 2 == 0)){
                resultTd.setAttribute("style","font-size:" + tdFontSize);
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
    titleBox.appendChild(resultTable);
    
    // console.log(displayList);

    var ladderSection = null;

    var showResultList = new Array();
    //테이블에 해당 배열에 사다리의 형태를 div로 만들기
    for (let i = 0; i < displayList.length; i++) {
        showResultList[i] = new Array();
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
            showResultList[i][j] = stick;
            if(i == 0){
                ladderSection.style.color = colorArr[j/2];
            }
        }
        
    }
    // console.log(showResultList);
    //////////////////////////결과창 띄우기/////////////////////////////
    var resultSection = document.createElement("div");
    resultSection.id = "resultSection";
    titleBox.appendChild(resultSection);
    titleBox.setAttribute("style", "width : 1200px;");
    var y = 0;
    for (let i = 0; i < ladderArr[0].length; i = i + 2) {
        y = i;
        for (let j = 0; j < ladderArr.length; j++) {
            if(ladderArr[j][y] == "ㅏ"){
                y += 2;
            }else if(ladderArr[j][y] == "ㅓ"){
                y -= 2;
            }
            if(j == 9){
                //console.log(i + "번째 결과 : [" + j + "][" + y/2 + "] = " + displayList[11][y]);
                var resultBtn = document.createElement("input");
                resultBtn.type = "button";
                resultBtn.className = "resultBtn";
                resultBtn.value = displayList[0][i] + " = " + displayList[11][y];
                resultSection.appendChild(resultBtn);
                
                resultBtn.addEventListener("click", function(){
                    showResultFnc(i, showResultList);
                });
            }
        }
    }

}

function showResultFnc(startValue, showResultList) {
    ////////////////////////색 바뀌는거 테스트 중////////////////////////////////////////
    var playerColor = startValue / 2;
    

    var delayTime = 0;  // 트랜지션 딜레이 시간
    for (let i = 1; i < showResultList.length - 1; i++) {
        delayTime = (i / 10) + "s";  // 트랜지션 딜레이 계산
        showResultList[i][startValue].setAttribute("style", "background-color : " + colorArr[playerColor] + "; transition-delay : " + delayTime);
        if (showResultList[i][startValue].className === "joinStick1") {
            showResultList[i][startValue+1].setAttribute("style", "background-color : " + colorArr[playerColor] + "; transition-delay : " + delayTime);
            startValue += 2;  // joinStick1일 경우 인덱스 증가
        } else if (showResultList[i][startValue].className === "joinStick2") {
            showResultList[i][startValue-1].setAttribute("style", "background-color : " + colorArr[playerColor] + "; transition-delay : " + delayTime);
            startValue -= 2;  // joinStick2일 경우 인덱스 감소
        }
    }
}
